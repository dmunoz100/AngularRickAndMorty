import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/Models/personaje';
import { PersonajeServicesService } from 'src/app/Services/personaje-services.service';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html'
})
export class PersonajeDetalleComponent implements OnInit {

  Personaje!:Personaje;

  constructor(private aRoute:ActivatedRoute,private PersonajeServices:PersonajeServicesService) {
      var per:Personaje = new Personaje();
      this.Personaje = per;
   }

  ngOnInit(): void {
     this.PersonajeServices.GetItem(this.aRoute.snapshot.paramMap.get('id')!).subscribe((data:any)=>{
          console.log("DATA de personaje");
          console.log(data);
          this.Personaje.id = data.id,
          this.Personaje.Nombre = data.name;
          this.Personaje.Img = data.image;
          this.Personaje.Estatus = data.status;
          this.Personaje.Genero = data.gender;
          this.Personaje.Origen = data.origin.name;
          this.Personaje.Creacion = data.created;
      });
  }

}
