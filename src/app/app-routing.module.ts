import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioRegistroVehiculoComponent } from './componente/formulario-registro-vehiculo/formulario-registro-vehiculo.component';


const routes: Routes = [{
  path: 'Parqueadero/formaulario',
  component: FormularioRegistroVehiculoComponent
}, {
  path: '**',
  redirectTo: 'Parqueadero/formaulario'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
