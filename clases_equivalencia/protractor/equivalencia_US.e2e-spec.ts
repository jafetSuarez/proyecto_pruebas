import { protractor, browser, by, element } from 'protractor';


describe('Pruebas Clases de equivalencia', function () {

    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://us.pg.com/brands/");
        browser.driver.manage().window().setSize(1280, 1024);
    });

    /* Caso de prueba: 1
       Descripción: Se realizará una búsqueda utilizando un carácter especial ‘&’
       Se espera: Observar en los primeros resultados marcas que contengan el carácter ‘&’ en su nombre */
    it('Barra de búsqueda - Caracter especial ', async function () {
        element(by.xpath('/html/body/div/main/div[2]/div/div[1]/div[1]/input')).sendKeys('&')
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1750);').then(function() {
            browser.sleep(1000);
        }).then(function() {
            browser.sleep(5000);
            expect(element(by.xpath('/html/body/div[1]/main/div[2]/div/div[2]/div[1]/div/div[8]/div/div/p'))
            .getText()).toMatch('&');
        });
    });

    /* Caso de prueba: 2
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado de bebés
       Se espera: Observar las marcas relacionados con la categoría de cuidado de bebés */
    it('Búsqueda filtrada - Baby Care checkbox', async function () {
        browser.sleep(1800);
        element(by.id("cat-Baby Care")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Baby Care');
    });

    /* Caso de prueba: 3
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado de la ropa
       Se espera: Observar las marcas relacionados con la categoría de cuidado de la ropa*/
    it('Búsqueda filtrada - Fabric Care checkbox', async function () {
        browser.sleep(1800);
        element(by.id("cat-Fabric Care")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Fabric Care');
    });

    /* Caso de prueba: 4
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado de la familia
       Se espera: Observar las marcas relacionados con la categoría de cuidado de la familia*/
    it('Búsqueda filtrada - Family Care checkbox', async function () {
        browser.sleep(1800);
        element(by.id("cat-Family Care")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Family Care');
    });

     /* Caso de prueba: 5
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado femenino
       Se espera: Observar las marcas relacionados con la categoría de cuidado femenino*/
    it('Búsqueda filtrada - Feminine Care checkbox', async function () {
        browser.sleep(1800);
        element(by.id("cat-Feminine Care")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Feminine Care');
    });

    /* Caso de prueba: 6
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado personal
       Se espera: Observar las marcas relacionados con la categoría de cuidado personal*/
    it('Búsqueda filtrada - Grooming checkbox', async function () {
        browser.sleep(1800);
        element(by.id("cat-Grooming")).click();
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Grooming');
    });

    /* Caso de prueba: 7
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado del cabello
       Se espera: Observar las marcas relacionados con la categoría de cuidado del cabello*/
    it('Búsqueda filtrada -  Hair Care checkbox', async function () {
        browser.sleep(1800);
        element(by.id("cat-Hair Care")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Hair Care');
    });

    /* Caso de prueba: 8
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado en el hogar
       Se espera: Observar las marcas relacionados con la categoría de cuidado en el hogar*/
    it('Búsqueda filtrada - Home Care checkbox', async function () {
        browser.sleep(1800);
        element(by.id("cat-Home Care")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Home Care');
    });

    /* Caso de prueba: 9
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado oral
       Se espera: Observar las marcas relacionados con la categoría de cuidado oral*/
    it('Búsqueda filtrada - Oral Care checkbox', async function () {
        browser.sleep(1800);
        element(by.id("cat-Oral Care")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Oral Care');
    });

    /* Caso de prueba: 10
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado femenino
       Se espera: Observar las marcas relacionados con la categoría de cuidado femenino*/
    it('Búsqueda filtrada - Personal Health Care checkbox', async function () {
        browser.sleep(1800);
        element(by.id("cat-Personal Health Care")).click();
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Personal Health Care');
    });

    afterEach(function () {
        browser.restart();
    });
});