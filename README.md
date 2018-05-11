# Mobile Chkout

*Summary:* Web app designed to provide a quicker way of checking out at stores. This application will allow shoppers to ring themselves up using their smartphone as a scanner.

## Technology
 This frontend of this application is built using Google's Polymer (2.x). 
 > _Polymer is a lightweight library that helps you take full advantage of Web Components._
  
  [Checkout more about Polymer](https://www.polymer-project.org/)

 The backend uses Google Firebase (NoSQL - document database). 
 > _Firebase is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform._
  
  [Checkout more about Firebase](https://firebase.google.com/)
  
  This app uses GPS (via the built-in geolocation API) to track user position.
  
  It also accesses the user's camera in order to scan barcodes using the [Quagga.js library](https://serratus.github.io/quaggaJS/)

## Approach 
 The ECMAScript2015 (ES6) features are used throughout the application.

 Using the built in functionality of the browsers has been the focus throughout this project
