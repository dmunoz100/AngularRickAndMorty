import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locaciones } from 'src/app/Models/locaciones';
import { LocacionesServicesService } from 'src/app/Services/locaciones-services.service';

@Component({
  selector: 'app-locacion-detalle',
  templateUrl: './locacion-detalle.component.html'
})
export class LocacionDetalleComponent implements OnInit {

  Locacion!: Locaciones;
  constructor(private aRoute:ActivatedRoute,private LocacionServ:LocacionesServicesService) {
      var l:Locaciones = new Locaciones();
      this.Locacion = l;
   }

  ngOnInit(): void {
    this.LocacionServ.GetItem(this.aRoute.snapshot.paramMap.get("id")!).subscribe((data:any)=>{
        this.Locacion.id = data.id;
        this.Locacion.Nombre = data.name;
        this.Locacion.Tipo =data.type;
    });
  }

}
