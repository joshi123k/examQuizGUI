import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  flag=false;

  constructor(private userService:UserService,private snake:MatSnackBar) { }

  public user = {

    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''

  };

  ngOnInit(): void {
  }

  formSubmit()
  {
    console.log(this.user)
    if(this.user.username=='' || this.user.username==null)
    {
      //alert("User is required");
      this.snake.open(
        "User is require!!","",{duration:3000}
      )
      return;
    }

    // call adduser()
    this.flag=true;
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        this.flag=false;
        //alert("success")
        Swal.fire('Registration Successfully Done')
     },
     error=>{
       // alert("went wrong")
       this.flag=false;
       this.snake.open(
        "Something went wrong !!","",{duration:3000}
      )
        }
    )

  }


}
