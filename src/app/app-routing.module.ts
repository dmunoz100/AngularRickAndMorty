import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocacionDetalleComponent } from './Pages/locacion-detalle/locacion-detalle.component';
import { LocacionesComponent } from './Pages/locaciones/locaciones.component';
import { NoFoundComponent } from './Pages/no-found/no-found.component';
import { PersonajeDetalleComponent } from './Pages/personaje-detalle/personaje-detalle.component';
import { PersonajesComponent } from './Pages/personajes/personajes.component';

const routes: Routes = [
  {path:"",redirectTo:"Personajes",pathMatch:"full"},
  {path:"Personajes",component:PersonajesComponent},
  {path:"Personajes/:id",component:PersonajeDetalleComponent},
  {path:"Locaciones",component:LocacionesComponent},
  {path:"Locaciones/:id",component:LocacionDetalleComponent},
  {path:"**",component:NoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
