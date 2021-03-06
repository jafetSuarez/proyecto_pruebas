# Clases de Equivalencia :computer:

Se plantearon 10 casos de prueba utilizando la técnica de clases de equivalencia. Dichos casos fueron ejecutados para el módulo de marcas de las página de P&G en inglés y español.
Estos casos fueron automatizados utilizando el framework [Protractor](https://www.protractortest.org/#/) para aplicaciones Angular y AngularJS. De modo que la aplicación se ejecuta en un navegador real, interactuando con ella como lo haría un usuario.

## Para ejecutar los casos de pruebas desarrollados seguir los siguientes pasos

1. Instalar Protractor, actualizar y ejecutar el servidor de Selenium
```
	npm install -g protractor
	npm install webdriver-manager –g
	webdriver-manager update
	webdriver-manager start
```

2. Agregar y modificar los archivos al proyecto

 Editar el archivo protractor.conf.js del proyecto por el facilitado en la carpeta protractor. Los archivos con terminación .e2e-spec.ts contendrán los casos de prueba desarrollados. Estos se agregan a la carpeta *proyecto/e2e/src* del proyecto de Angular.

3. Ejecutar los siguientes comandos

`ng serve` → Sobre la carpeta del proyecto principal

`protractor protractor.conf.js` → Sobre la carpeta e2e de nuestro proyecto

## Resultados obtenidos :heavy_check_mark:

![images/resultado_protractor.png](./images/resultado_protractor.png)
