import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $ } from 'protractor';

export class Registarvehiculo {
    until: ProtractorExpectedConditions;

    constructor() {
        this.until = ExpectedConditions;
    }

    navigateTo(url = "/"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    
    getTipoVehiculoSelect(): ElementFinder {
        return $('#tipovehiculo');
    }

    getVehiculoIngresado(placa:string): ElementFinder {
       // return $( "input[name*='"+placa+"]" );
       return $('#btnSalir' + placa);
    }

    getPlacaImput(): ElementFinder {
        return $('#placa');
    }

    getBtnRegistrarButton(): ElementFinder {
        return $('#Btnregistro');
    }

    getCilindrajeImput(): ElementFinder {
        return $('#cilindraje');
    }

    getMensajeQuemado(): ElementFinder {
        return element(by.className("toast-message"));
    }



    async getMensajeQuemadoText(): Promise<string> {
        return await this.getMensajeQuemado().getText();
    }



    async setTextPlaca(text: string): Promise<void> {
        return await this.getPlacaImput().sendKeys(text);
    }

    async setTipoVehiculoSelect(optionI: string): Promise<void> {
        // Tick to wait until options apear
        await browser.sleep(500);
        // End tick
        this.getTipoVehiculoSelect().all(by.css('option[value="' + optionI + '"]')).click();
        await browser.sleep(800);
    }

    async setTextCilindraje(text: string): Promise<void> {
        return await this.getCilindrajeImput().sendKeys(text);
    }
    ///Verificar///
    async verificarIngreso(text: string): Promise<void> {
        return await this.getVehiculoIngresado(text);
    }


///click//////
    async clickBtnRegistrarButton(): Promise<void> {
        await this.getBtnRegistrarButton().click();
    }

    async clickTipoVehiculoSelect(): Promise<void> {
        await this.getTipoVehiculoSelect().click();
    }

///EN ESPERA&/////////////////
    async waitUntilCilindrajeImput(): Promise<void> {
        return await this.esperahastaqueEstépresente(this.getCilindrajeImput());
    }
    async waitUntilCilindrajeImputEnabled(): Promise<void> {
        return await this.esperarHastaestarhabilitado(this.getCilindrajeImput());
    }

    async esperahastaqueEstépresente(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.presenceOf(element),
            5000,
            `Elemento $ {id} tarda demasiado en aparecer en el DOM`
        );
    }

    async esperarHastaestarhabilitado(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.elementToBeClickable(element),
            5000,
            `Elemento $ {id} tarda demasiado en aparecer en el DOM`
        );
    }

    
    async esperarUnejemploMensajeNoestáPresente(): Promise<void> {
        return await this. esperaHastaqueNoestéPresente(this.getMensajeQuemado());
    }
    async esperaHastaqueNoestéPresente(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.stalenessOf(element),
            5000,
            `Elemento $ {id} tarda demasiado en desaparecer en el DOM`
        );

    }



}