##App de donaciones
###Desarrollador: David Villanueva
###Fecha: 24/10/2020

**src/components
    En este directorio se encuentran los componentes que extraje para alivianar la lectura
    y comprension del componente principal

**src/components/materialComponents
    Decidi separar la implementacion de los componentes de material para evitar asi el hacer crecer
    el archivo DonationApp.js con los seteos de estilos del componente de material

**src/helpers
    Directorio donde se encuentran dos helpers utilizados para la "logica" de la app
    se decidio tenerlo en otoros archivos para alivianar la lectura del componente principal

**src/hooks
    Un solo hook utilizado para poder contar la cantidad de donantes que tiene e ir actualizandolo
    separandole la logica para poder utilizar sin entorpecer la lectura del componente principal



El archivo principal de inicio de la app es el index.js (src/index.js) el cual solo renderiza
el DonationApp (tambien en src), decidi instanciarlo directamente con sus props en el index.js
debido a que lo vi como un proyecto de prueba para el componente

###Para lanzar la app###
    Para lanzar la app en un entorno local se debera realizar un git clone del repositorio
    una vez en el directorio en local correr el comando 

    *npm install*

    Para instalar las dependencias del proyecto, una vez instaladas podemos correr:

    *npm start*

    Para levantar el proyecto en local


Las dependencias de este proyecto son las siguientes:
    "@material-ui/core": "^4.11.0",  ( unica instalada de forma externa )
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.3"

Todas las dependendicias fueron instaladas a traves del comando "create-react-app"

Ademas se cuenta con 1 cdn a Google Fonts para las fuentes del proyecto

<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri&display=swap" rel="stylesheet"> 