# Confía front-end w/ fake API
* Para **iniciar la base de datos** ejecutar en una terminal: "json-server --watch db.json"

* Posteriormente **iniciar el proyecto front-end** en otra terminal, sin cerrar la anteriormente abierta, con el siguiente comando: "npm run dev"

* Para **ejecutar los tests**: "npm test"

## **Explicación:**
- De la plantilla eliminé carpetas redundantes, y opté por usar un estilo de componentización similar al pre-existente.
- Agregué el globals.css para poder hacer deplazamientos sútiles desde las navbars.
- La sección principal esta en "views/IndexView" renderiza las vistas de la página principal.
- La carpeta "investment" crea la página donde están las secciones de la imagen, renderizando las vistas desde la carpeta "view/InvestmentView"
- Dentro de la carpeta InvestmentView hay 7 secciones con la estructura de la imagen prototipo. 
- Extraje los logos de la imagen para poder usarlos, les eliminé el fondo, y subí a Cloudinary para poder aligerar el proyecto.
- Usé MUI para casi todas las secciones, tambien el "styles={{}}" para poder aplicar otras de forma más rápida. También hice uso del estilo de MUI para responsive en varios componentes y secciones que lo necesitaban.
- Para la base de datos use "json-server", allí agregué los datos que son llamados en InvestmentView.tsx mediante fetch, con errores de consola donde se mostraría si llegasen a fallar.
- Para los test unitarios use "jest", en estos casos solo revisa que se rendericen los textos proporcionados. 
Estos tests se encuentran en las siguientes direcciones: "src\views\InvestmentView\components\Attention\Attention.test.tsx" y "src\views\IndexView\components\ContactForm\ContactForm.test.tsx"
- Creé también un .env el cual me estuvo funcionando bien luego empezó a fallar así que opte por eliminarlo.
- Otros: eliminé el modo oscuro, me pareció innecesario, instalé la librería millionjs para óptimizar los tiempos de carga.