import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router,private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }
  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
            this.router.navigateByUrl('login');
        }
    });
  }

}
