import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  @Input() X:any;
  @Output() newPlat:EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deletePlat(id){
let plats=JSON.parse(localStorage.getItem("plats")||"[]");
for (let i = 0; i < plats.length; i++) {
 if (plats[i].id==id) {
 plats.splice(i,1);
 this.newPlat.emit(plats);
 break;
 }
  
}
localStorage.setItem("plats",JSON.stringify(plats));
  }

}
