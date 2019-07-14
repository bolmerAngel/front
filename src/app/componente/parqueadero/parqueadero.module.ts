import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParqueaderoComponent } from './parqueadero.component';
import { ListaVehiculoComponent } from './lista-vehiculo/lista-vehiculo.component';
import { FormularioRegistroVehiculoComponent } from './formulario-registro-vehiculo/formulario-registro-vehiculo.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ParqueaderoComponent,
    FormularioRegistroVehiculoComponent,
    ListaVehiculoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ], exports: [
    ParqueaderoComponent,
    FormularioRegistroVehiculoComponent,
    ListaVehiculoComponent
  ]
})
export class ParqueaderoModule { }
