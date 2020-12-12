import { browser, by, element } from 'protractor';

describe('Prubas por Pares a: latam.pg.com', function () {
	//Arrange:
	beforeEach(async function () {
		await browser.waitForAngularEnabled(false);
		await browser.get("https://latam.pg.com/marcas-y-productos/");
	});

	/**
     * @name Par-01
     * 
     * @objective Validar que se puedan seleccionar los 10 checkbox (todas las opciones) y 
     * se debe verificar que se mostró el último valor seleccionado al final.
     * 
     * @steps Dar click sobre los checkbox:
	 * Cuidado del bebé
	 * Cuidado de la ropa
	 * Cuidado de la familia
     * Cuidado femenino
	 * Cuidado personal
	 * Cuidado del cabello
	 * Cuidado en el hogar
	 * Cuidado oral
	 * Cuidado de la salud personal
	 * Cuidado personal y de la piel
	 * 
     * @assert Se espera que retorne 'Cuidado personal y de la piel' en el h3 del último resultado.
     */
	it('Par-01', async function () {
		browser.sleep(800);
		//Act:
		element(by.id("cat-Cuidado del bebé")).click();
		element(by.id("cat-Cuidado de la ropa")).click();
		element(by.id("cat-Cuidado de la familia")).click();
		element(by.id("cat-Cuidado femenino")).click();
		element(by.id("cat-Cuidado personal")).click();
		element(by.id("cat-Cuidado del cabello")).click();
		element(by.id("cat-Cuidado en el hogar")).click();
		element(by.id("cat-Cuidado oral")).click();
		element(by.id("cat-Cuidado de la salud personal")).click();
		element(by.id("cat-Cuidado personal y de la piel")).click().then(function () {
		browser.sleep(300);
		//Assert:
		expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div[10]/h3')).getText()).toEqual("Cuidado personal y de la piel");
		});
	});

	/**
     * @name Par-02
     * 
     * @objective Validar que se pueda seleccionar 1 checkbox y que cuando se cumpla 
     * se debe verificar que se mostró último valor seleccionado.
     * 
     * @steps Dar click sobre los checkbox:
	 * Cuidado del bebé
	 * 
     * @assert Se espera que retorne 'Cuidado del bebé' en el h3 del último resultado.
     */
	it('Par-02', async function () {
		browser.sleep(800);
		//Act:
		element(by.id("cat-Cuidado del bebé")).click().then(function () {
		browser.sleep(300);
		//Assert:
		expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div/h3')).getText()).toEqual("Cuidado del bebé");
		});
	});

	/**
     * @name Par-03
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el último valor seleccionado al final.
     * 
     * @steps Dar click sobre los checkbox:
	 * Cuidado de la ropa
     * Cuidado femenino
	 * Cuidado del cabello
	 * Cuidado oral
	 * Cuidado personal y de la piel
	 * 
     * @assert Se espera que retorne 'Cuidado personal y de la piel' en el h3 del último resultado.
     */
	it('Par-03', async function () {
		browser.sleep(800);
		//Act:
		element(by.id("cat-Cuidado de la ropa")).click();
		element(by.id("cat-Cuidado femenino")).click();
		element(by.id("cat-Cuidado del cabello")).click();
		element(by.id("cat-Cuidado oral")).click();
		element(by.id("cat-Cuidado personal y de la piel")).click().then(function () {
		browser.sleep(300);
		//Assert:
		expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div[5]/h3')).getText()).toEqual("Cuidado personal y de la piel");
		});
	});
	
	/**
     * @name Par-04
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el último valor seleccionado al final.
     * 
     * @steps Dar click sobre los checkbox:
	 * Cuidado del bebé
	 * Cuidado de la familia
	 * Cuidado personal
	 * Cuidado en el hogar
	 * Cuidado de la salud personal
	 * 
     * @assert Se espera que retorne 'Cuidado de la salud personal' en el h3 del último resultado.
     */
	it('Par-04', async function () {
		browser.sleep(800);
		//Act:
		element(by.id("cat-Cuidado de la ropa")).click();
		element(by.id("cat-Cuidado femenino")).click();
		element(by.id("cat-Cuidado del cabello")).click();
		element(by.id("cat-Cuidado oral")).click();
		element(by.id("cat-Cuidado de la salud personal")).click().then(function () {
		browser.sleep(300);
		//Assert:
		expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div[5]/h3')).getText()).toEqual("Cuidado de la salud personal");
		});
	});

	
	/**
     * @name Par-05
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el último valor seleccionado al final.
     * 
     * @steps Dar click sobre los checkbox:
	 * Cuidado del bebé
	 * Cuidado de la ropa
	 * Cuidado de la familia
	 * Cuidado del cabello
	 * Cuidado en el hogar
	 * Cuidado personal y de la piel
	 * 
     * @assert Se espera que retorne 'Cuidado personal y de la piel' en el h3 del último resultado.
     */
	it('Par-05 Todos los checkbox seleccionados', async function () {
		browser.sleep(800);
		//Act:
		element(by.id("cat-Cuidado del bebé")).click();
		element(by.id("cat-Cuidado de la ropa")).click();
		element(by.id("cat-Cuidado de la familia")).click();
		element(by.id("cat-Cuidado del cabello")).click();
		element(by.id("cat-Cuidado en el hogar")).click();
		element(by.id("cat-Cuidado personal y de la piel")).click().then(function () {
		browser.sleep(300);
		//Assert:
		expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div[6]/h3')).getText()).toEqual("Cuidado personal y de la piel");
		});
	});

	/**
     * @name Par-06
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el último valor seleccionado al final.
     * 
     * @steps Dar click sobre los checkbox:
	 * Cuidado del bebé
     * Cuidado femenino
	 * Cuidado personal
	 * Cuidado oral
	 * Cuidado de la salud personal
	 * 
     * @assert Se espera que retorne 'Cuidado de la salud personal' en el h3 del último resultado.
     */
	it('Par-06', async function () {
		browser.sleep(800);
		//Act:
		element(by.id("cat-Cuidado del bebé")).click();
		element(by.id("cat-Cuidado femenino")).click();
		element(by.id("cat-Cuidado personal")).click();
		element(by.id("cat-Cuidado oral")).click();
		element(by.id("cat-Cuidado de la salud personal")).click().then(function () {
		browser.sleep(300);
		//Assert:
		expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div[5]/h3')).getText()).toEqual("Cuidado de la salud personal");
		});
	});

	/**
     * @name Par-07
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el último valor seleccionado al final.
     * 
     * @steps Dar click sobre los checkbox:
	 * Cuidado de la ropa
	 * Cuidado personal
	 * Cuidado en el hogar
	 * Cuidado oral
	 * Cuidado personal y de la piel
	 * 
     * @assert Se espera que retorne 'Cuidado personal y de la piel' en el h3 del último resultado.
     */
	it('Par-07', async function () {
		browser.sleep(800);
		//Act:
		element(by.id("cat-Cuidado de la ropa")).click();
		element(by.id("cat-Cuidado personal")).click();
		element(by.id("cat-Cuidado en el hogar")).click();
		element(by.id("cat-Cuidado oral")).click();
		element(by.id("cat-Cuidado personal y de la piel")).click().then(function () {
		browser.sleep(300);
		//Assert:
		expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div[5]/h3')).getText()).toEqual("Cuidado personal y de la piel");
		});
	});
	
	/**
     * @name Par-08
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el último valor seleccionado al final.
     * 
     * @steps Dar click sobre los checkbox:
	 * Cuidado de la familia
     * Cuidado femenino
	 * Cuidado del cabello
	 * Cuidado de la salud personal
	 * 
     * @assert Se espera que retorne 'Cuidado de la salud personal' en el h3 del último resultado.
     */
	it('Par-08', async function () {
		browser.sleep(800);
		//Act:
		element(by.id("cat-Cuidado de la familia")).click();
		element(by.id("cat-Cuidado femenino")).click();
		element(by.id("cat-Cuidado del cabello")).click();
		element(by.id("cat-Cuidado de la salud personal")).click().then(function () {
		browser.sleep(300);
		//Assert:
		expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div[4]/h3')).getText()).toEqual("Cuidado de la salud personal");
		});
	});

	/**
     * @name Par-09
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el último valor seleccionado al final.
     * 
     * @steps Dar click sobre los checkbox:
	 * Cuidado del bebé
	 * Cuidado de la ropa
	 * Cuidado de la familia
     * Cuidado femenino
	 * Cuidado personal
	 * 
     * @assert Se espera que retorne 'Cuidado personal' en el h3 del último resultado.
     */
	it('Par-09', async function () {
		browser.sleep(800);
		//Act:
		element(by.id("cat-Cuidado del bebé")).click();
		element(by.id("cat-Cuidado de la ropa")).click();
		element(by.id("cat-Cuidado de la familia")).click();
		element(by.id("cat-Cuidado femenino")).click();
		element(by.id("cat-Cuidado personal")).click().then(function () {
		browser.sleep(300);
		//Assert:
		expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div[5]/h3')).getText()).toEqual("Cuidado personal");
		});
	});

	/**
     * @name Par-10
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el último valor seleccionado al final.
     * 
     * @steps Dar click sobre los checkbox:
	 * Cuidado del bebé
	 * Cuidado del cabello
	 * Cuidado en el hogar
	 * Cuidado oral
	 * Cuidado de la salud personal
	 * Cuidado personal y de la piel
	 * 
     * @assert Se espera que retorne 'Cuidado personal y de la piel' en el h3 del último resultado.
     */
	it('Par-10', async function () {
		browser.sleep(800);
		//Act:
		element(by.id("cat-Cuidado del bebé")).click();
		element(by.id("cat-Cuidado del cabello")).click();
		element(by.id("cat-Cuidado en el hogar")).click();
		element(by.id("cat-Cuidado oral")).click();
		element(by.id("cat-Cuidado de la salud personal")).click();
		element(by.id("cat-Cuidado personal y de la piel")).click().then(function () {
		browser.sleep(300);
		//Assert:
		expect(element(by.xpath('/html/body/div/main/div[2]/div/div[2]/div[6]/h3')).getText()).toEqual("Cuidado personal y de la piel");
		});
	});

	//Limpiar variables (reiniciar el explorador web):
	afterEach(function () {
   		browser.restart();
	});
	
});