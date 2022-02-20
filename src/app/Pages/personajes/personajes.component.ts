import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/Models/personaje';
import { PersonajeServicesService } from 'src/app/Services/personaje-services.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {

  ListPersonajes:Personaje[] = [];
  
  constructor(public PersonajeServices:PersonajeServicesService) {
   }

  ngOnInit(): void {
   this.PersonajeServices.Get().subscribe((data:any) => {
    data.results.forEach((e:any) =>{
       var Per:Personaje = new Personaje();
        Per.id=e.id;
        Per.Nombre=e.name;
        Per.Estatus = e.status;
        Per.Img = e.image;
        this.ListPersonajes.push(Per);
    });
   });
  }

}
