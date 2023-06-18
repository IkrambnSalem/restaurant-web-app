import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { generateId } from 'src/app/shared/generate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router:Router , private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      pwd:["", [Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
    })
  }

  login() {
    console.log("here the object of", this.loginForm.value);
    let user = this.loginForm.value;
    this.userService.login(user);

  }
}
