# Donation App
## Dev: David Villanueva (Ronco).
## Date: 24/10/2020.


## Directories
* src/components.

    _In this directory are the components extracted for the descompresing of the main component._

* src/components/materialComponents
    
    _I decided separate the implementation of the components of Material.ui to avoid doit bigger the main component with the set of styles._
    
* src/components/informativeComponents
  
    _In this folder are the components  related with the view of data, only show information of the cause._

* src/components/interactiveComponents

    _In this folder are the component that have a reaction with the interaction of the user._

* src/components/languageSelector

    _In this folder are the component and styled sheed for the selector of languages, I decided have it
    in a folder independient because is a component that can be used in another project_

* src/helpers
    
    _In this directory are the helpers used for the "logic" in the app, I decided have in other files for help the reading of the main component._
    
* src/hooks

    _Only one hook is used for the donor count that has the cause, with separate logic for its use without hindering the reading of the main component._

* src/config

    _In this directory are one file for the config of the framework of translation that I decided to use._

* src/firebase

    _In this directory are one file for export the comunication with the database in firebase._


## Deployment

_The main file is index.js that only render the App component, who read the database and impact 
those data in the Donation App component. To run this app you have to install [Node.js](https://nodejs.org/es/) in you pc_




### To launch the app in a local enviroment should downlooad the project, and go to the path in your terminal. Once there run next commands
    
    
    $ npm install

    //to install the dependencies of the project

    $ npm start

    //to serve the project in localhost
    



## Dependencies 

### This are the dependencies externs of this project, is important remind that this app was created with [create-react-app](https://create-react-app.dev/)

+ [Material.ui](https://material-ui.com/) - Functional components

    I use Material for the progress bar because I think that was a component secondary in the app.
    I haved a trouble with the Loader component that use a Backdrop of material, this component of material uses a deprecated method this throw a warning important in the console, so I removed the srictMode of the app.

+ [Firebase](https://firebase.google.com/?gclid=Cj0KCQjwzbv7BRDIARIsAM-A6-3GcIZDY5gRt7ThGz1bP25XEJPEbOo6D-dQfMo1NDFfbRR3XEkk9-waApwmEALw_wcB) - For the database use

    This is the firstime that I use Firebase honestly this is the first time that I have persistant data in a React App,
    I decided for firebase because is a technology that I have heared mention before in conferences and just chatting with another devs.

+ [i18next](https://www.i18next.com/) - For the translate

    This is the firstime that I do an app with multiple languages, I chose doit with [React-Translate](https://www.npmjs.com/package/react-translate) but finally decided for i18Next because are more documentation for his use.

## Dev-Dependencies

### This are the dev dependencies that I used for the unit of test in this project

+ [Enzyme](https://enzymejs.github.io/enzyme/) - For add functionalities to Jest
  
+ [Enzyme-to-Json](https://www.npmjs.com/package/enzyme-to-json) - For the posibilitie that check the render component

    This is one of my first unit of test, is someting that I'm learning and that enjoy to do.

## CDN

### This projects count with one CDN to Google fonts for the font

+ [GoogleFonts](https://fonts.google.com/)


## Conclution

 I complicated with the "modeling" of components, I think is the missing experience. In determinate moment I noted thath haved a component fully loaded dificul to read, I dont are conform with that but think is a practice that I can learn and perfect.

 Something that make me feel proud is the fact that I use in this "project" technologies that I never used, and surelly have a lot of bad practices and troubles in a closely future but is something that I learn two days ago, is a result that make me feel confortly.

 I'm shure that this mini proyect can be better but this is what can I do in this moment surelly in a future I re-doit this with the knowledge that I have acquire with the days.

 I have a trouble with the test be the implementation of i18n, I have reading the documentation for do the test and I consider is something that take to long time and I need reading more for the test unit of this project. I don't wanna lie with my capacities, this is what can do in this point of mi carrer. Obviusly I can learn more, I can afirm that i gona learn more.

