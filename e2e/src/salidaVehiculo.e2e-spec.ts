import { SalidaVehiculo } from './salidaVehiculo.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Salida de vehiculo', () => {
    let salidaVehiculo: SalidaVehiculo;
    const placaCarro: string = "URG585";
    const placaMoto: string = "WSR324";
    const tipoVehiculoCarro: string= "CARRO";
    const tipoVehiculoMoto: string= "MOTO";
    const tipoVehiculoVacio: string= "";

    beforeEach(async () => {
        salidaVehiculo= new SalidaVehiculo();
        await salidaVehiculo.navigateTo();
    })

    it('Salida de vehículo carro', async () => {

        
        const expectedMessage = "Vehiculo a salido correctamente.";

        await salidaVehiculo.setSalirVehiculo(placaCarro);
        
        await browser.sleep(800);
    
       expect(salidaVehiculo.verificarSalida(placaCarro)).toEqual(null);
   
    })
    it('Salida de vehículo Moto', async () => {

        
        const expectedMessage = "Vehiculo a salido correctamente.";

        await salidaVehiculo.setSalirVehiculo(placaMoto);
        
        await browser.sleep(800);
    
       expect(salidaVehiculo.verificarSalida(placaMoto)).toEqual(null);
   
    })

})

