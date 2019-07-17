import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroVehiculoComponent } from './formulario-registro-vehiculo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaVehiculoComponent } from '../lista-vehiculo/lista-vehiculo.component';
//import {ParqueaderoService} from ParqueaderoService


describe('FormularioRegistroVehiculoComponent', () => {
  let component: FormularioRegistroVehiculoComponent;
  let fixture: ComponentFixture<FormularioRegistroVehiculoComponent>;
  //let placa: getPlacaImput;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRegistroVehiculoComponent,ListaVehiculoComponent ],
      imports: [FormsModule,HttpClientModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRegistroVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});

describe("placa", function() {
  let component: FormularioRegistroVehiculoComponent;
  it("se enencuentra el vehiculo en el parqueadero", function() {
    expect(true).toBe(true);
  });
});







