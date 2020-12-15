# Combinación por pares :couple_with_heart:

## Guía de uso para ejecutar las pruebas automatizadas de Combinación por Pares

1. Casos de prueba

	- Crear el código en Python que se encuentra en la ruta *proyecto_pruebas/comb_pares/python_allpairs/comb_pares.py*

	- Generar el archivo *combPares.txt* (que sirve de entrada para AllPairs)
	```
	py comb_pares.py
	```

	- Ejecutar AllPairs para crear el archivo con extención *.xls* que contiene los casos de prueba
	```
	allpairs.exe combPares.txt > combPares.xls
	```

2. Instalar Protractor, acutualizar y ejecutar el servidor de Selenium
```
npm install -g protractor
npm install webdriver-manager –g
webdriver-manager update
webdriver-manager start
```

3. Ejecute el servidor de Node con `ng seve`

4. En la carpeta e2e de su proyecto de Angular sustituya *protractor.conf.js* por *proyecto_pruebas/comb_pares/pruebas_protactor/protractor.conf.js* y ejecute `protractor protractor.conf.js`