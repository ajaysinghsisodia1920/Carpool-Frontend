import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    email:new FormControl(""),
    password:new FormControl("")
  });

  loginSubmitted(){
    // http://localhost:48806

    this.user={
      EmailId:this.loginForm.value.email!,
      Username:'',
      Password:this.loginForm.value.password!,
    }
    console.log(this.user)
    this.authService.loginUser(this.user).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('/home');
    });
  }

}
