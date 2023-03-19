import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:User;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(15)])
  });

  loginSubmitted(){
    // http://localhost:48806

    console.log(this.loginForm);
    console.log(this.getEmail());
    console.log(this.getPassword());
    this.user={
      EmailId:this.loginForm.value.email!,
      Username:'',
      Password:this.loginForm.value.password!,
    }
    console.log(this.user)
    this.authService.loginUser(this.user).subscribe((res)=>{
      this.authService.setToken(res);
      this.router.navigateByUrl('/home');
    });
  }

  getEmail(){
    return this.loginForm.get("email");
  }

  getPassword(){
    return this.loginForm.get("password");
  }

}
