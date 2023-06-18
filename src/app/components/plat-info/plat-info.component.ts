import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat-info',
  templateUrl: './plat-info.component.html',
  styleUrls: ['./plat-info.component.css']
})
export class PlatInfoComponent implements OnInit {
  plat:any={};
  id:any;
  constructor(private activatedRoute:ActivatedRoute,private platService:PlatService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    
    this.platService.getPlayById(this.id).subscribe((response)=>{
      console.log("here data from be",response);
      
  this.plat=response.plat;
    });
  
  }

}
