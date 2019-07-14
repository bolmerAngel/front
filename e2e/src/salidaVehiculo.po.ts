import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $ } from 'protractor';

export class SalidaVehiculo {
    until: ProtractorExpectedConditions;
    getBtnRegistrarButton: any;


    constructor() {
        this.until = ExpectedConditions;
    }

    // navegando
    navigateTo(url = "Listar"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    getBtnSalirButton(placa: string): ElementFinder {
        return $('#btnSalir' + placa);
    }

    getVerificarBtnSalirButton(placa: string): ElementFinder {
       return null;      
    }

    async setSalirVehiculo(placa: string): Promise<void> {
        return await this.getBtnSalirButton(placa).click();
    }

    async verificarSalida(placa: string): Promise<string> {
        return await this.getVerificarBtnSalirButton(placa);
    }

    getMensajeQuemado(): ElementFinder {
        return element(by.className("toast-message"));
    }


    async clickBtnRegistrarButton(): Promise<void> {
        await this.getBtnRegistrarButton().click();
    }

    async getMensajeQuemadoText(): Promise<string> {
        return await this.getMensajeQuemado().getText();
    }

   
    
}