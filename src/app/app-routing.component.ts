import { NgModule } from "@angular/core";
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DocumentComponent } from "./document/document.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'login', pathMatch: 'full', component: LoginComponent },
    { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
    { path: 'document', pathMatch: 'full', component: DocumentComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    providers: [],
    exports: [RouterModule],
})
export class AppRoutingModule {

}