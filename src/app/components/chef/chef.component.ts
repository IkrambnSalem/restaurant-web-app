import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
@Input() X: any;
@Output () newChefs: EventEmitter <any> = new EventEmitter ();

  constructor() { }

  ngOnInit() {
  }
  deleteChef(id){
   let chefs=JSON.parse(localStorage.getItem("chefs")||"[]");
   for (let i = 0; i < chefs.length; i++) {
    if (chefs[i].id==id) {
      chefs.splice(i,1);
      this.newChefs.emit(chefs);
      break;
    }
    
   } 
 localStorage.setItem("chefs",JSON.stringify(chefs));
  }
}
