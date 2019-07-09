import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioRegistroVehiculoComponent } from './componente/formulario-registro-vehiculo/formulario-registro-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaVehiculoComponent } from './componente/lista-vehiculo/lista-vehiculo.component';
@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroVehiculoComponent,
    ListaVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
