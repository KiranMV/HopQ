import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentComponent } from './document/document.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartModule} from 'primeng/chart';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {Message} from 'primeng//api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartModule,
    ConfirmDialogModule,
    CardModule,
    MessagesModule,
    MessageModule
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
