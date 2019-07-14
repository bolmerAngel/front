import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $ } from 'protractor';

export class Registarvehiculo {
    until: ProtractorExpectedConditions;

    constructor() {
        this.until = ExpectedConditions;
    }

    navigateTo(url = "Registrar"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    
    getTipoVehiculoSelect(): ElementFinder {
        return $('#tipo');
    }

    getPlacaImput(): ElementFinder {
        return $('#placa');
    }

    getBtnRegistrarButton(): ElementFinder {
        return $('#registro');
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

    async setTipoVehiculoSelect(optionI: number): Promise<void> {
        // Marque para esperar hasta que aparezcan las opciones
        await browser.sleep(500);
      
        const opciones: ElementFinder[] = await this.getTipoVehiculoSelect().all(by.tagName('option'));
        opciones[optionI].click();
    }

    async setTextCilindraje(text: string): Promise<void> {
        return await this.getCilindrajeImput().sendKeys(text);
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