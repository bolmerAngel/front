import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';

import { ListaVehiculoComponent } from './lista-vehiculo.component';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { ParqueaderoService } from 'src/app/componente/parqueadero/shared/parqueadero.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { SalidaVehiculo } from 'e2e/src/salidaVehiculo.po';

describe('ListaVehiculoComponent', () => {
  let component: ListaVehiculoComponent;
  let fixture: ComponentFixture<ListaVehiculoComponent>;
  let injector: TestBed;
  let service: ParqueaderoService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVehiculoComponent ],
      providers: [ParqueaderoService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(ParqueaderoService);
    httpMock = injector.get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([ParqueaderoService], (service: ParqueaderoService) => {
    expect(service).toBeTruthy();
    }));
  
 
 /*it('debe mostrar la salida',async(() => {
 expect(component.salir).toBe(true);
  }))*/  


    
  

});
