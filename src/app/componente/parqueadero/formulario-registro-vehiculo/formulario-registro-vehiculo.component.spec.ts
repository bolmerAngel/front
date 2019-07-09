import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroVehiculoComponent } from './formulario-registro-vehiculo.component';

describe('FormularioRegistroVehiculoComponent', () => {
  let component: FormularioRegistroVehiculoComponent;
  let fixture: ComponentFixture<FormularioRegistroVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRegistroVehiculoComponent ]
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
