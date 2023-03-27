import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstName: string ="";
  lastName: string ="";
  userName: string ="";

  email: string = '';
  password: string = '';

  isSignup: boolean = false;
  erroMessage: string = "";

  constructor(private router: Router,private http: HttpClient) {}

  signup() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
     
      firstName: this.firstName,
      lastName:this.lastName,
      userName: this.userName,
      email: this.email,
      password: this.password,
      isSignup:this.isSignup
    };

        this.http.post("http://localhost:4200/", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);

        if (resultData.status) 
        {
      
           this.router.navigateByUrl('/home');
    

        } 
        else
         {
          alert(" Email or Password required");
          console.log("Errror signup");
        }
      });
    }

}
