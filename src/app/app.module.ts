import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PersonajesComponent } from './Pages/personajes/personajes.component';
import { LocacionesComponent } from './Pages/locaciones/locaciones.component';
import { NoFoundComponent } from './Pages/no-found/no-found.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonajeDetalleComponent } from './Pages/personaje-detalle/personaje-detalle.component';
import { LocacionDetalleComponent } from './Pages/locacion-detalle/locacion-detalle.component'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PersonajesComponent,
    LocacionesComponent,
    NoFoundComponent,
    PersonajeDetalleComponent,
    LocacionDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
