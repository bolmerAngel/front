import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, of } from 'rxjs';
import {ParqueaderoService} from './parqueadero.service';
@Injectable({
  providedIn: 'root'
})
export class ParqueaderoServiceStubs {

  constructor(
    private http: HttpClient

  ) { }

  crear(data: any) {
    return of(true);

  }

  listar() {
    return of([])
  }

  salir(placa: string) {
    return of(true)
  }



}
