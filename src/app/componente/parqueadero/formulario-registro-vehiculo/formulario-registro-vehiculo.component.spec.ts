import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroVehiculoComponent } from './formulario-registro-vehiculo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaVehiculoComponent } from '../lista-vehiculo/lista-vehiculo.component';


describe('FormularioRegistroVehiculoComponent', () => {
  let component: FormularioRegistroVehiculoComponent;
  let fixture: ComponentFixture<FormularioRegistroVehiculoComponent>;
 

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
