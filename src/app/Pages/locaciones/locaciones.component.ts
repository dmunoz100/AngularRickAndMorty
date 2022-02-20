import { Component, OnInit } from '@angular/core';
import { Locaciones } from 'src/app/Models/locaciones';
import { LocacionesServicesService } from 'src/app/Services/locaciones-services.service';

@Component({
  selector: 'app-locaciones',
  templateUrl: './locaciones.component.html'
})
export class LocacionesComponent implements OnInit {

  ListLocaciones:Locaciones[] = [];
  
  constructor(private Locacionservices:LocacionesServicesService) { }

  ngOnInit(): void {
    this.Locacionservices.Get().subscribe((data:any)=>{
        data.results.forEach((element:any) => {
          var loca = new Locaciones();
          loca.id = element.id;
          loca.Nombre = element.name;
          loca.Tipo = element.type;
          this.ListLocaciones.push(loca);
        });
    });
  }

}
