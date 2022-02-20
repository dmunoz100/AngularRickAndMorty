import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajeServicesService {

  constructor(private http:HttpClient) {}

  Get():any {
    return this.http.get("https://rickandmortyapi.com/api/character");
  }

  GetItem(Id:string):any {
    return this.http.get("https://rickandmortyapi.com/api/character/"+Id.toString());
  }

}
