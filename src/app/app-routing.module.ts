import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { Page404Component } from './components/views/page404/page404.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'home/:id', component: HomeComponent, canActivate: [LoginGuard] },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
