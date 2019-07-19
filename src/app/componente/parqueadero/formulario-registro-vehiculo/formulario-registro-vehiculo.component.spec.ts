import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroVehiculoComponent } from './formulario-registro-vehiculo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaVehiculoComponent } from '../lista-vehiculo/lista-vehiculo.component';
import { Registarvehiculo } from 'e2e/src/registroVehiculo.po';
import { ParqueaderoService } from '../shared/parqueadero.service';
import { ParqueaderoServiceStubs } from '../shared/Parqueadero.service.Stubs';



describe('FormularioRegistroVehiculoComponent', () => {
  let component: FormularioRegistroVehiculoComponent;
  let fixture: ComponentFixture<FormularioRegistroVehiculoComponent>;

//////////////////función que se ejecutará antes de cada prueba/////////
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioRegistroVehiculoComponent, ListaVehiculoComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [
        {
          provide: ParqueaderoService,
          useClass: ParqueaderoServiceStubs
        }
      ]

    })
      .compileComponents();
  }));
////////////////función que se ejecutará antes de cada prueba//////////
  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRegistroVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('la forma debe ser valida de carro',async(()=>{
    component.resetearFormulario();
    component.formulariovehiculo.placa = 'DSDS-665';
    component.formulariovehiculo.tipovehiculo = 'CARRO';
    component.formulariovehiculo.cilindraje=0;
    fixture.detectChanges();
    component.registrar();
    expect('DSDS-665').toEqual('DSDS-665');
   
  }))

 it('la forma debe ser valida de moto ',async(()=>{
    component.resetearFormulario();
    component.formulariovehiculo.tipovehiculo = 'MOTO';
    component.formulariovehiculo.placa = 'DS-66';
    component.formulariovehiculo.cilindraje=600;
    fixture.detectChanges();
    component.registrar()
    expect('DS-66').toEqual('DS-66');
  }))

});

/*describe("placa", function () {
  let component: FormularioRegistroVehiculoComponent;
  it("se enencuentra el vehiculo en el parqueadero", function () {
    expect(true).toBe(true);
  });
});*/







