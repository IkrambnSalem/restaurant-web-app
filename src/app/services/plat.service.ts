import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  platUrl:string="http://localhost:3000/plats"
  constructor(private httpClient:HttpClient) { }

// request and response for addPlat
 addPlat(plat){
  return this.httpClient.post<{message:string}>(this.platUrl,plat);
 }

//  get all the plats 
getallPlats(){
  return this.httpClient.get<{plats:any,message:string}>(this.platUrl);
}

// get plat by id 
getPlayById(id){
  return this.httpClient.get<{plat:any}>(`${this.platUrl}/${id}`);
}
editUserByid(newobj){
  return this.httpClient.put<{message:string}>(this.platUrl,newobj);

}
deletePlat(id){
 return this.httpClient.delete<{message:string}>(`${this.platUrl}/${id}`);
}


}
