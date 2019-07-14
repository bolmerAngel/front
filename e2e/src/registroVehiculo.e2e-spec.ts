import { Registarvehiculo } from './registroVehiculo.po';

describe('Registro de vehiculo', () => {
    let registarvehiculo: Registarvehiculo;
    const placaCarro: string = "URG585";
    const placaMoto: string = "WSR324";
    const tipoVehiculoCarro: number= 0;
    const tipoVehiculoMoto: number= 1;

    beforeEach(async () => {
        registarvehiculo= new Registarvehiculo();
        await registarvehiculo.navigateTo();
    })

    it('Registro de vehículo carro', async () => {

        // Arrange
        const expectedMessage = "Vehiculo ingresado correctamente.";

        await registarvehiculo.setTextPlaca(placaCarro);
        await registarvehiculo.clickTipoVehiculoSelect();
        await registarvehiculo.setTipoVehiculoSelect(tipoVehiculoCarro);
        await registarvehiculo.clickBtnRegistrarButton();

           // Act
           const toastContent = await registarvehiculo.getMensajeQuemadoText();

           // Assert
           expect(toastContent.trim()).toEqual(expectedMessage);
   
    })

    it('Error registro de vehículo carro', async () => {

        const expectedMessage = "Erro al ingresado del vehiculo .";

        await registarvehiculo.setTextPlaca(placaCarro);
        await registarvehiculo.clickTipoVehiculoSelect();
        await registarvehiculo.setTipoVehiculoSelect(tipoVehiculoCarro);
        await registarvehiculo.clickBtnRegistrarButton();

        // Act
        const toastContent = await registarvehiculo.getMensajeQuemadoText();

        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);

    })

    
})

