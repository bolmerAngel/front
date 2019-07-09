import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioRegistroVehiculoComponent } from './componente/parqueadero/formulario-registro-vehiculo/formulario-registro-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaVehiculoComponent } from './componente/parqueadero/lista-vehiculo/lista-vehiculo.component';
import { BarraModule } from './componente/barra/barra.module';
import { ParqueaderoModule } from './componente/parqueadero/parqueadero.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BarraModule,
    ParqueaderoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
