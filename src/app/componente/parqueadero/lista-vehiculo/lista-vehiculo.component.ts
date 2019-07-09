import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from 'src/app/parqueadero.service';

@Component({
  selector: 'app-lista-vehiculo',
  templateUrl: './lista-vehiculo.component.html',
  styleUrls: ['./lista-vehiculo.component.css']
})
export class ListaVehiculoComponent implements OnInit {

  constructor(private parqueaderoServicio: ParqueaderoService) { }

  ngOnInit() {
    this.listar()

  }
  public listado;

  public listar() {
    this.parqueaderoServicio.listar().subscribe((salida) => {
      this.listado = salida;

    }
      , err => {
        alert(err.error.message);
      });
  }

  
  public salir(placa) {
    this.parqueaderoServicio.salir(placa).subscribe((salida) => {
      this.listar();
    }

      , err => {
        alert(err.error.message);
      });
  }

}
