import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueaderoComponent } from './parqueadero.component';
import { ListaVehiculoComponent } from './lista-vehiculo/lista-vehiculo.component';
import { FormularioRegistroVehiculoComponent } from './formulario-registro-vehiculo/formulario-registro-vehiculo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ParqueaderoComponent', () => {
  let component: ParqueaderoComponent;
  let fixture: ComponentFixture<ParqueaderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParqueaderoComponent,ListaVehiculoComponent,FormularioRegistroVehiculoComponent ],
      imports: [FormsModule,HttpClientModule]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParqueaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
