import { Component, OnInit, ViewChild } from '@angular/core';
import { ParqueaderoService } from 'src/app/componente/parqueadero/shared/parqueadero.service';
import { ListaVehiculoComponent } from '../lista-vehiculo/lista-vehiculo.component';

@Component({
  selector: 'app-formulario-registro-vehiculo',
  templateUrl: './formulario-registro-vehiculo.component.html',
  styleUrls: ['./formulario-registro-vehiculo.component.css']
})
export class FormularioRegistroVehiculoComponent implements OnInit {

  @ViewChild(ListaVehiculoComponent, { static: true }) listado: ListaVehiculoComponent;

  public formulariovehiculo = {
    placa: "",
    tipovehiculo: "",
    cilindraje: 0
  }
  public registrar() {
    this.parqueaderoServicio.crear(this.formulariovehiculo).subscribe((salida) => {
      this.listado.listar();
      this.resetearFormulario();
    }
      , err => {
        alert(err.error.message);
      });


  }
  public resetearFormulario() {
    this.formulariovehiculo = {
      tipovehiculo: '',
      placa: '',
      cilindraje: 0
    };
  }

  constructor(
    private parqueaderoServicio: ParqueaderoService
  ) { }

  ngOnInit() {


  }

}
