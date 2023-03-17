import { Text } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UrlSerializer } from '@angular/router';
import { User } from '../Models/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!:User;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  registerForm=new FormGroup({
    email:new FormControl(""),
    password:new FormControl(""),
    confirmPassword:new FormControl("")
  });

  registerSubmitted(){
      console.log(this.registerForm.value.email);
      console.log(this.registerForm.value.password);
      // this.user.Email=this.registerForm.value.email!;
      // this.user.Password=this.registerForm.value.password!;
      this.user={
        // UserId:0,
        EmailId:this.registerForm.value.email!,
        Username:'',
        Password:this.registerForm.value.password!,
      }
      console.log(this.user);
      this.authService.registerUser(this.user).subscribe((res)=>{
        console.log(res);
      });
  }
}
