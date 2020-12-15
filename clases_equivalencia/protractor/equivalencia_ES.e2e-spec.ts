import { protractor, browser, by, element } from 'protractor';


describe('Pruebas Clases de equivalencia', function () {

    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://latam.pg.com/marcas-y-productos/");
        browser.driver.manage().window().setSize(1280, 1024);
    });

    /* Caso de prueba: 1
       Descripción: Se realizará una búsqueda utilizando un carácter especial ‘&’
       Se espera: Observar en los primeros resultados marcas que contengan el carácter ‘&’ en su nombre */
    it('Barra de búsqueda - Caracter especial ', async function () {
        element(by.xpath('/html/body/div/main/div[2]/div/div[1]/div[1]/input')).sendKeys('&')
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/div/div[1]/h4'))
        .getText()).toMatch('&');
    });

    /* Caso de prueba: 2
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado de bebés
       Se espera: Observar las marcas relacionados con la categoría de cuidado de bebés */
    it('Búsqueda filtrada - Checkbox cuidado del bebé', async function () {
        browser.sleep(1800);
        element(by.id("cat-Cuidado del bebé")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Cuidado del bebé');
    });

    /* Caso de prueba: 3
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado de la ropa
       Se espera: Observar las marcas relacionados con la categoría de cuidado de la ropa*/
    it('Búsqueda filtrada - Cuidado de la ropa', async function () {
        browser.sleep(1800);
        element(by.id("cat-Cuidado de la ropa")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Cuidado de la ropa');
    });

    /* Caso de prueba: 4
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado de la familia
       Se espera: Observar las marcas relacionados con la categoría de cuidado de la familia*/
    it('Búsqueda filtrada - cuidado de la familia', async function () {
        browser.sleep(1800);
        element(by.id("cat-Cuidado de la familia")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Cuidado de la familia');
    });

     /* Caso de prueba: 5
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado femenino
       Se espera: Observar las marcas relacionados con la categoría de cuidado femenino*/
    it('Búsqueda filtrada - cuidado femenino', async function () {
        browser.sleep(1800);
        element(by.id("cat-Cuidado femenino")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Cuidado femenino');
    });

    /* Caso de prueba: 6
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado personal
       Se espera: Observar las marcas relacionados con la categoría de cuidado personal*/
    it('Búsqueda filtrada - cuidado personal', async function () {
        browser.sleep(1800);
        element(by.id("cat-Cuidado personal")).click();
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Cuidado personal');
    });

    /* Caso de prueba: 7
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado del cabello
       Se espera: Observar las marcas relacionados con la categoría de cuidado del cabello*/
    it('Búsqueda filtrada -cuidado del cabello', async function () {
        browser.sleep(1800);
        element(by.id("cat-Cuidado del cabello")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Cuidado del cabello');
    });

    /* Caso de prueba: 8
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado en el hogar
       Se espera: Observar las marcas relacionados con la categoría de cuidado en el hogar*/
    it('Búsqueda filtrada - cuidado en el hogar', async function () {
        browser.sleep(1800);
        element(by.id("cat-Cuidado en el hogar")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Cuidado en el hogar');
    });

    /* Caso de prueba: 9
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado oral
       Se espera: Observar las marcas relacionados con la categoría de cuidado oral*/
    it('Búsqueda filtrada - cuidado oral', async function () {
        browser.sleep(1800);
        element(by.id("cat-Cuidado oral")).click();
        browser.sleep(1000);
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Cuidado oral');
    });

    /* Caso de prueba: 10
       Descripción: Se realizará una búsqueda filtrada de marcas que se encuentren relacionados a la categoría de cuidado femenino
       Se espera: Observar las marcas relacionados con la categoría de cuidado femenino*/
    it('Búsqueda filtrada - cuidado de la salud personal', async function () {
        browser.sleep(1800);
        element(by.id("cat-Cuidado de la salud personal")).click();
        expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3'))
        .getText()).toEqual('Cuidado de la salud personal');
    });

    afterEach(function () {
        browser.restart();
    });
});