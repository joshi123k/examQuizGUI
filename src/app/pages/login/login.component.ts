import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }

  constructor(private snake:MatSnackBar) { }

  ngOnInit(): void {
  }

  formlogin()
  {
    if(this.loginData.username.trim()=='' || this.loginData.username.trim()==null)
    {
      this.snake.open(
        "Username is required!!",'',{duration:3000}
      );
    }

    if(this.loginData.password.trim()=='' || this.loginData.password.trim()==null)
    {
      this.snake.open(
        "password is required!!",'',{duration:3000}
      );
    }
  }

}
