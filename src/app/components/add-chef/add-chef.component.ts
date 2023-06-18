import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';
import { generateId } from 'src/app/shared/generate';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {

  chefForm:FormGroup;

  chef:any={};
  constructor(private chefService:ChefService , private router:Router) { }

  ngOnInit() {
  }

  addChef(){
    console.log("here the object of",this.chef);
    this.chefService.addChef(this.chef).subscribe((response)=>{
      console.log(response.message);
      });
  this.router.navigate([`chefs`])
  };
  }

