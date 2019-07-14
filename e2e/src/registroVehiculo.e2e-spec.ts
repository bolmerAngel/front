import { Registarvehiculo } from './registroVehiculo.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Registro de vehiculo', () => {
    let registarvehiculo: Registarvehiculo;
    const placaCarro: string = "URG585";
    const placaMoto: string = "WSR324";
    const tipoVehiculoCarro: string= "CARRO";
    const tipoVehiculoMoto: string= "MOTO";
    const tipoVehiculoVacio: string= "";

    beforeEach(async () => {
        registarvehiculo= new Registarvehiculo();
        await registarvehiculo.navigateTo();
    })

    it('Registro de vehículo carro', async () => {

        
        const expectedMessage = "Vehiculo ingresado correctamente.";

        await registarvehiculo.setTextPlaca(placaCarro);
        await registarvehiculo.clickTipoVehiculoSelect();
        await registarvehiculo.setTipoVehiculoSelect(tipoVehiculoCarro);
        await registarvehiculo.clickBtnRegistrarButton();
        
        await browser.sleep(800);
       
        expect(registarvehiculo.verificarIngreso(placaCarro)).length>0;
   
    })

    it('Registro de vehículo moto', async () => {

        
        const expectedMessage = "Vehiculo ingresado correctamente.";

        await registarvehiculo.setTextPlaca(placaMoto);
        await registarvehiculo.clickTipoVehiculoSelect();
        await registarvehiculo.setTipoVehiculoSelect(tipoVehiculoMoto);
        await registarvehiculo.setTextCilindraje('500');
        await registarvehiculo.clickBtnRegistrarButton();
        
        await browser.sleep(800);
       // const toastContent = await registarvehiculo.getMensajeQuemadoText();

        expect(registarvehiculo.verificarIngreso(placaMoto)).length>0;
   
    })

   /* it('Error registro de vehículo carro', async () => {

        const expectedMessage = "Erro al ingresado del vehiculo .";
        
        await registarvehiculo.setTextPlaca(placaCarro);
        await registarvehiculo.clickTipoVehiculoSelect();
        await registarvehiculo.setTipoVehiculoSelect(tipoVehiculoCarro);
        await registarvehiculo.clickBtnRegistrarButton();

   
        var alertDialog = p.switchTo().alert();
        expect(alertDialog.getText()).toEqual("Hello");

        //const toastContent = await registarvehiculo.getMensajeQuemadoText();

      
        expect(toastContent.trim()).toEqual("El vehiculo ya ha ingresado");

    })*/


})

