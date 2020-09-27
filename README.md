# Donation App
## Dev: David Villanueva (Ronco).
## Date: 24/10/2020.


## Directories
* src/components.

    _In this directory are the components extracted for the descompresing of the main component._


* src/components/materialComponents
    
    _I decided separate the implementation of the components of Material.ui to avoid doit bigger the main component with the set of styles._
    

* src/helpers
    
    _In this directory are the helpers used for the "logic" in the app, I decided have in other files for help the reading of the main component._
    

* src/hooks

    _Only one hook is used for the donor count that has the cause, with separate logic for its use without hindering the reading of the main component._




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

+ [Firebase](https://firebase.google.com/?gclid=Cj0KCQjwzbv7BRDIARIsAM-A6-3GcIZDY5gRt7ThGz1bP25XEJPEbOo6D-dQfMo1NDFfbRR3XEkk9-waApwmEALw_wcB) - For the database use

    This is the firstime that I use Firebase honestly this is the first time that I have persistant data in a React App,
    I decided for firebase because is a technology that I have heared mention before in conferences and just chatting with another devs.

## Dev-Dependencies

### This are the dev dependencies that I used for the unit of test in this project

+ [Enzyme](https://enzymejs.github.io/enzyme/) - For add functionalities to Jest
  
+ [Enzyme-to-Json](https://www.npmjs.com/package/enzyme-to-json) - For the posibilitie that check the render component

    This is one of my first unit of test, is someting that I'm learning and that enjoy to do.

## CDN

### This projects count with one CDN to Google fonts for the font

+ [GoogleFonts](https://fonts.google.com/)