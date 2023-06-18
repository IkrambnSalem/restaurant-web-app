import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {

  platsTab:any=[];
  constructor(private platService:PlatService) { }

  ngOnInit() {
    this.platService.getallPlats().subscribe((data)=>{
console.log("here all the object of plats",data.message);
this.platsTab=data.plats;

    });
   }
upDatePlat(objs:any){
this.platsTab=objs;
}
}
