import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }
  
  public addUser(users){
    localStorage.setItem('users',JSON.stringify({users}));
    // if(username == ""){
    //     return "newUser"
    //   }else{
    //     for(var i=0; i<users.length; i++){
    //       if(users[i].username == username){
    //         return "exists";
    //       }
    //     } 
    //     users.push(user);
    //     localStorage.setItem('users',JSON.stringify({users}));
    //     return "success"; 
    //   }
    }
  public getUsers(): User[] {
    let localStorageItem=JSON.parse(localStorage.getItem('users'));

    if(localStorageItem==null)
      return [];
    return localStorageItem.users;
  }
}
