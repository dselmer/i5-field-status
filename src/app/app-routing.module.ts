import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormpageComponent } from './formpage/formpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'formpage',
    component:FormpageComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
