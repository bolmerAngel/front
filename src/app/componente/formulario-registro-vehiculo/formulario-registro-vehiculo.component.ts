import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from 'src/app/parqueadero.service';

@Component({
  selector: 'app-formulario-registro-vehiculo',
  templateUrl: './formulario-registro-vehiculo.component.html',
  styleUrls: ['./formulario-registro-vehiculo.component.css']
})
export class FormularioRegistroVehiculoComponent implements OnInit {

  public formulariovehiculo = {
    placa: "",
    tipovehiculo: "",
    cilindraje: 0
  }
  public listado;
  public registrar() {
    this.parqueaderoServicio.crear(this.formulariovehiculo).subscribe((salida) => {
      this.listar();
      this.resetearFormulario();
    }
    , err => {
    alert(err.error.message);
    });


  }



  public listar() {
    this.parqueaderoServicio.listar().subscribe((salida) => {
      this.listado= salida;

    }
    , err => {
    alert(err.error.message);
    });
  }


  public resetearFormulario()  {
    this.formulariovehiculo= {
    tipovehiculo: '',
    placa: '',
    cilindraje: 0
    };
    }



  public salir(placa) {
    this.parqueaderoServicio.salir(placa).subscribe((salida) => {
      this.listar()
    }
    
, err => {
  alert(err.error.message);
  });
  }



  constructor(
    private parqueaderoServicio: ParqueaderoService
  ) { }

  ngOnInit() {

    this.listar()

  }

}
