import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { generateId } from 'src/app/shared/generate';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  path: string;
  msgError:string;
  constructor(private formBuiler: FormBuilder,
    private router: Router , private userService:UserService) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuiler.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      phoneNumber: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    })
  }
  signup() {
    alert("btn clicked");
    console.log("here user object", this.signupForm.value);  
    this.signupForm.value.role = (this.path == "/subscription") ? "user" : "Admin";

    this.userService.signup(this.signupForm.value).subscribe((data) => {
      console.log("the object is added", data);
      if (data.message == "error") {
        this.msgError = "Email Exist";
      } else {
        this.router.navigate(["login"]);
      }

    });
  }

}
