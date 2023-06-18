import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent implements OnInit {
  platForm:FormGroup;
  plat:any={}
  id:any;
  constructor(private platService:PlatService , private activatedRoute:ActivatedRoute , private router:Router) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get("id");
    this.platService.getPlayById(this.id).subscribe((response)=>{
    console.log(response);
    this.plat=response.plat;
    });
  }
  editPlat(){
this.platService.editUserByid(this.plat).subscribe((response)=>{
console.log("here response from BE",response.message);

});
this.router.navigate(["plat-admin"]);
  }
}
