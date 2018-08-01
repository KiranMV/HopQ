import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/api';
import { SharedServiceService } from '../shared-service.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{
  msgs: Message[] = [];
  token: any;
  register: boolean = true;
  loginForm: FormGroup;
  registerForm:FormGroup;
	constructor(private fb:FormBuilder,private router: Router,private messageService: MessageService,private sharedService:SharedServiceService){
		this.loginForm = fb.group({
			username: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.registerForm = fb.group({
      username: ['', Validators.required],
      email : ['',Validators.required],
			password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit(){
  }

  loginFormClick(username: string, password: string) {
   // this.msgs = [];
    let userName = this.loginForm.value.username;
    let passWord = this.loginForm.value.password;
    // login successful if there's a user available in the response
    if (userName == null || passWord == null || userName == "" || passWord == "") {
      this.messageService.add({ severity: 'error', summary: 'User', detail: 'Please fill all the fields' });
     
      return;
    }
    let userExist = false;
    let users = this.sharedService.getUsers();
    for (var i = 0; i < users.length; i++) {
      if (users[i].username == userName && users[i].password == passWord) {
        userExist = true;
        break;
      }
    }
    if (!userExist) {
      this.messageService.add({ severity: 'error', summary: 'User', detail: 'User ' + userName + ' invalid user credentials' });
      return;
    } 
    this.router.navigateByUrl('/home');


    // if (localStorage.length != 0) {
    //   let data = JSON.parse(localStorage.getItem('users'));
    //   if (data != null) {
    //     data['users'].forEach(data => {
    //       if (data.username == userName &&
    //         data.password == passWord) {
    //         // login if the user already registered and navigate to home page
    //         this.router.navigateByUrl('/home');
    //       } 
    //       // check for 
    //       else if (data.username == "" || data.username == undefined || data.password != passWord) {
    //         this.messageService.add({ severity: 'error', summary: 'Invalid User', detail: 'Please provide valid user credentials' });
    //         // alert("Please Enter Username and password...") 
    //       }
    //     });
    //   } else {
    //     this.messageService.add({ severity: 'error', summary: 'User:', detail: 'User Doesnt Exists' });
    //   }
    // } else {
    //   this.messageService.add({ severity: 'error', summary: 'User:', detail: 'User Doesnt Exists' });
    // }
  }
  gotoRegister(){
    this.registerForm.reset();
    this.register = !this.register;
  }
  signUp() {
   // this.msgs = [];
    let userName = this.registerForm.value.username;
    let passWord = this.registerForm.value.password;
    let email = this.registerForm.value.email;
    if (userName == null || passWord == null || email == null) {
      this.messageService.add({ severity: 'error', summary: 'User', detail: 'Please fill all the fields' });
      return;
    }
    let userExist = false;
    let users = this.sharedService.getUsers();
    for (var i = 0; i < users.length; i++) {
      if (users[i].username == userName) {
        userExist = true;
        break;
      }
    }
    if (userExist) {
      this.messageService.add({ severity: 'error', summary: 'User', detail: 'User ' + userName + ' already exists..' });
      return;
    }
    users.push(new User(userName, passWord, email));
    this.sharedService.addUser(users);
    this.messageService.add({ severity: 'success', summary: 'User', detail: 'Successfully Registered USER ' + userName });
  }
}
