import { Component, OnInit } from '@angular/core';
import { DATA } from '../mockdata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  constructor() {
  }
  ngOnInit() {
    this.data = DATA;
  }

}
