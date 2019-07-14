import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { ParqueaderoComponent } from './componente/parqueadero/parqueadero.component';
import { FormularioRegistroVehiculoComponent } from './componente/parqueadero/formulario-registro-vehiculo/formulario-registro-vehiculo.component';
import { FormsModule } from '@angular/forms';
import { ListaVehiculoComponent } from './componente/parqueadero/lista-vehiculo/lista-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,FormsModule,HttpClientModule
      ],
      declarations: [
        AppComponent,BarraComponent,ParqueaderoComponent,FormularioRegistroVehiculoComponent,ListaVehiculoComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  
});
