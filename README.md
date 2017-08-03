# Backbase Front End Assignment: Make A Transaction

## Project setup
Make sure the files are served by a server, because angular fetching of templates will violate the browser cross origin policy otherwise (if used directly on the file system).
The application requires browser localstorage to work since it is used to mock backend persistance.

## Technologies used
AngularJS
Angular Material - angular implementation of google material design
Bower for package management

## Application architecture
Although this application has no backend it uses angular $httpBackend to intercept http calls to the backend and return the data provided by transactionsDataService. This means  
that the application can easily be hooked up onto the real backend with little changes to the code. This also provides the application with persistency, since all the changes that the user makes
are stored into the local storage of the browser.

The main and only controller is indexCtrl which has several injected services (usersService, transactionService, senderService). App.js file contains the angular module as well as routing and fake backend
logic. Routing is implemented although in this application there is only a single view so it is not utilized.
Sorting and searching in the recent transactions section was implemented with angular js filters.

Angular material design is used to provide a modern looking user friendly UI.

