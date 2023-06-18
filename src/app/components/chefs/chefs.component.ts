import { Component, OnInit } from '@angular/core';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  chefsTab:any=[ ];

 constructor(private chefService:ChefService) { }

  ngOnInit() {
this.chefService.getAllChefs().subscribe((response)=>{
console.log(response);
this.chefsTab=response.chefs
});
  }
upDateChefs(objs:any){
  this.chefsTab=objs;
}
}
