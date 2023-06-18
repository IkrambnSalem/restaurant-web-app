import { Component, OnInit } from '@angular/core';
import {FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';
import { generateId } from 'src/app/shared/generate';
@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  platForm:FormGroup;

  plat:any={};

  
  constructor( private router:Router,
    private platService:PlatService ) { }

  ngOnInit() {
  }

  addPlats(){
    console.log("here the object of",this.plat);

this.platService.addPlat(this.plat).subscribe((data)=>{
console.log("here the response of added",data);
});
this.router.navigate(["menu"]);
  }

}
