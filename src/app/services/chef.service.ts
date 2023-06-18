import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
chefUrl:string="http://localhost:3000/chefs"
  constructor(private httpChef:HttpClient) { }
addChef(obj){
return this.httpChef.post<{message:string}>(this.chefUrl,obj);
}

getAllChefs(){
  return this.httpChef.get<{chefs:any}>(this.chefUrl);
}

}
