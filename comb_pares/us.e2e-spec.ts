import { browser, by, element } from 'protractor';

describe('Pruebas por Pares a: us.pg.com', function () {
	//Arrange:
	beforeEach(async function () {
		await browser.waitForAngularEnabled(false);
		await browser.get("https://us.pg.com/brands/");
	});

	/**
     * @name Par-01
     * 
     * @objective Validar que se puedan seleccionar los 10 checkbox (todas las opciones) y 
     * se debe verificar que se mostró el primer valor seleccionado al incio.
     * 
     * @steps Dar click sobre los checkbox:
	 * Baby Care
	 * Fabric Care
	 * Family Care
     * Feminine Care
	 * Grooming
	 * Hair Care
	 * Home Care
	 * Oral Care
	 * Personal Health Care
	 * Skin & Personal Care
	 * 
     * @assert Se espera que retorne 'Baby Care' en el h3 del primer resultado.
     */
	it('Par-01', async function () {
		browser.sleep(1000);
		//Act:
		element(by.id("cat-Baby Care")).click();
		element(by.id("cat-Fabric Care")).click();
		element(by.id("cat-Family Care")).click();
		element(by.id("cat-Feminine Care")).click();
		element(by.id("cat-Grooming")).click();
		element(by.id("cat-Hair Care")).click();
		element(by.id("cat-Home Care")).click();
		element(by.id("cat-Oral Care")).click();
		element(by.id("cat-Personal Health Care")).click();
		element(by.id("cat-Skin & Personal Care")).click().then(function () {
		browser.sleep(600);
		//Assert:				
		expect(element(by.className('react-reveal brand-category__headline')).getText()).toEqual("Baby Care");
		});
	});

	/**
     * @name Par-02
     * 
     * @objective Validar que se pueda seleccionar 1 checkbox y que cuando se cumpla 
     * se debe verificar que se mostró el valor seleccionado.
     * 
     * @steps Dar click sobre los checkbox:
	 * Baby Care
	 * 
     * @assert Se espera que retorne 'Baby Care' en el h3 del primer resultado.
     */
	it('Par-02', async function () {
		browser.sleep(1000);
		//Act:
		element(by.id("cat-Baby Care")).click().then(function () {
		browser.sleep(600);
		//Assert:
		expect(element(by.className('react-reveal brand-category__headline')).getText()).toEqual("Baby Care");
		});
	});

	/**
     * @name Par-03
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el primer valor seleccionado al incio.
     * 
     * @steps Dar click sobre los checkbox:
	 * Fabric Care
     * Feminine Care
	 * Hair Care
	 * Oral Care
	 * Skin & Personal Care
	 * 
     * @assert Se espera que retorne 'Fabric Care' en el h3 del primer resultado.
    */ 
	it('Par-03', async function () {
		browser.sleep(1000);
		//Act:
		element(by.id("cat-Fabric Care")).click();
		element(by.id("cat-Feminine Care")).click();
		element(by.id("cat-Hair Care")).click();
		element(by.id("cat-Oral Care")).click();
		element(by.id("cat-Skin & Personal Care")).click().then(function () {
		browser.sleep(600);
		//Assert:
		expect(element(by.className('react-reveal brand-category__headline')).getText()).toEqual("Fabric Care");
		});
	});
	
	/**
     * @name Par-04
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el primer valor seleccionado al incio.
     * 
     * @steps Dar click sobre los checkbox:
	 * Family Care
	 * Grooming
	 * Home Care
	 * Personal Health Care
	 * 
     * @assert Se espera que retorne 'Family Care' en el h3 del primer resultado.
	 */
	it('Par-04', async function () {
		browser.sleep(1000);
		//Act:
		element(by.id("cat-Family Care")).click();
		element(by.id("cat-Grooming")).click();
		element(by.id("cat-Oral Care")).click();
		element(by.id("cat-Personal Health Care")).click().then(function () {
		browser.sleep(600);
		//Assert:
		expect(element(by.className('react-reveal brand-category__headline')).getText()).toEqual("Family Care");
		});
	});
	
	/**
     * @name Par-05
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el primer valor seleccionado al incio.
     * 
     * @steps Dar click sobre los checkbox:
	 * Baby Care
	 * Fabric Care
	 * Family Care
	 * Hair Care
	 * Home Care
	 * Skin & Personal Care
	 * 
	 * @assert Se espera que retorne 'Baby Care' en el h3 del primer resultado.
	*/
	it('Par-05 Todos los checkbox seleccionados', async function () {
		browser.sleep(1000);
		//Act:
		element(by.id("cat-Baby Care")).click();
		element(by.id("cat-Fabric Care")).click();
		element(by.id("cat-Family Care")).click();
		element(by.id("cat-Hair Care")).click();
		element(by.id("cat-Home Care")).click();
		element(by.id("cat-Skin & Personal Care")).click().then(function () {
		browser.sleep(600);
		//Assert:
		expect(element(by.className('react-reveal brand-category__headline')).getText()).toEqual("Baby Care");
		});
	});

	/**
     * @name Par-06
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el primer valor seleccionado al incio.
     * 
     * @steps Dar click sobre los checkbox:
	 * Baby Care
     * Feminine Care
	 * Grooming
	 * Oral Care
	 * Personal Health Care
	 * 
     * @assert Se espera que retorne 'Baby Care' en el h3 del primer resultado.
	 */
	it('Par-06', async function () {
		browser.sleep(1000);
		//Act:
		element(by.id("cat-Baby Care")).click();
		element(by.id("cat-Feminine Care")).click();
		element(by.id("cat-Grooming")).click();
		element(by.id("cat-Oral Care")).click();
		element(by.id("cat-Personal Health Care")).click().then(function () {
		browser.sleep(600);
		//Assert:
		expect(element(by.className('react-reveal brand-category__headline')).getText()).toEqual("Baby Care");
		});
	});

	/**
     * @name Par-07
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el primer valor seleccionado al incio.
     * 
     * @steps Dar click sobre los checkbox:
	 * Fabric Care
	 * Grooming
	 * Home Care
	 * Oral Care
	 * Skin & Personal Care
	 * 
     * @assert Se espera que retorne 'Fabric Care' en el h3 del primer resultado.
	 */	
	it('Par-07', async function () {
		browser.sleep(1000);
		//Act:
		element(by.id("cat-Fabric Care")).click();
		element(by.id("cat-Grooming")).click();
		element(by.id("cat-Home Care")).click();
		element(by.id("cat-Oral Care")).click();
		element(by.id("cat-Skin & Personal Care")).click().then(function () {
		browser.sleep(600);
		//Assert:
		expect(element(by.className('react-reveal brand-category__headline')).getText()).toEqual("Fabric Care");
		});
	});

	/**
     * @name Par-08
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el primer valor seleccionado al incio.
     * 
     * @steps Dar click sobre los checkbox:
	 * Family Care
     * Feminine Care
	 * Hair Care
	 * Personal Health Care
	 * 
     * @assert Se espera que retorne 'Family Care' en el h3 del primer resultado.
	 */
	it('Par-08', async function () {
		browser.sleep(1000);
		//Act:
		element(by.id("cat-Family Care")).click();
		element(by.id("cat-Feminine Care")).click();
		element(by.id("cat-Hair Care")).click();
		element(by.id("cat-Personal Health Care")).click().then(function () {
		browser.sleep(600);
		//Assert:
		expect(element(by.className('react-reveal brand-category__headline')).getText()).toEqual("Family Care");
		});
	});

	/**
     * @name Par-09
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el primer valor seleccionado al incio.
     * 
     * @steps Dar click sobre los checkbox:
	 * Baby Care
	 * Fabric Care
	 * Family Care
     * Feminine Care
	 * Grooming
	 * 
	 * @assert Se espera que retorne 'Baby Care' en el h3 del primer resultado.
	*/
	it('Par-09', async function () {
		browser.sleep(1000);
		//Act:
		element(by.id("cat-Baby Care")).click();
		element(by.id("cat-Fabric Care")).click();
		element(by.id("cat-Family Care")).click();
		element(by.id("cat-Feminine Care")).click();
		element(by.id("cat-Grooming")).click().then(function () {
		browser.sleep(600);
		//Assert:
		expect(element(by.className('react-reveal brand-category__headline')).getText()).toEqual("Baby Care");
		});
	});

	/**
     * @name Par-10
     * 
     * @objective Validar que se puedan seleccionar los checkbox requeridos y 
     * se debe verificar que se mostró el primer valor seleccionado al incio.
     * 
     * @steps Dar click sobre los checkbox:
	 * Baby Care
	 * Hair Care
	 * Home Care
	 * Oral Care
	 * Personal Health Care
	 * Skin & Personal Care
	 * 
     * @assert Se espera que retorne 'Baby Care' en el h3 del primer resultado.
	 */
	it('Par-10', async function () {
		browser.sleep(1000);
		//Act:
		element(by.id("cat-Baby Care")).click();
		element(by.id("cat-Hair Care")).click();
		element(by.id("cat-Home Care")).click();
		element(by.id("cat-Oral Care")).click();
		element(by.id("cat-Personal Health Care")).click();
		element(by.id("cat-Skin & Personal Care")).click().then(function () {
		browser.sleep(600);
		//Assert:
		expect(element(by.className('react-reveal brand-category__headline')).getText()).toEqual("Baby Care");
		});
	});
	
	//Limpiar variables (reiniciar el explorador web):
	afterEach(function () {
   		browser.restart();
	});
});