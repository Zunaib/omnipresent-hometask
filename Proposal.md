# Omni-Present BackEnd Task

> Dated : 4th Of August, 2021.

## Overview

We need to build a backend Rest API Endpoint that takes in some list of information and returns updated list with some additional information.

## Given

- We're given a list of employees.

## Goals

- Implement a Rest API Endpoint that takes in the list of employee and returns the same list with some additional data attached to each employee.
- Fetch relevant country specific information to each employee and append that information to each employee.

## External Links

> To fetch details for a country, use the following API - [Rest countries ](https://restcountries.eu/)

## Assumptions

- Assuming, for that each employee we need to attach additional information based on its country. The Employee list would have a number of employees and a single employee record must contain some attributes i.e. name, phone number, address, country etc.
- In all of those country is a must attribute because that is what the additional details would be fetched upon.

## Proposition To Solve

Following are the steps required to build this backend and the Rest API,

- Build a backend server app using **NodeJS & Express** or **Django**.
- Structure the app into MVC Architecture, i.e. divide app into parts.

  - Main Server - **for handling the app**
  - Controllers - **for implementing Rest API's**
  - Routes - **for named exporting of controller API's**
  - Models - **for future when implementing database models**
  - Config - **for having a consistent app configuration**
  - Utils - **for smaller / sub tasks**

- Declare configurations of db, regions etc to be checked in config file.
- Develop a basic https server and add additional libraries to enhance its functionality,

  - Express - **for creating a basic https server**
  - Body Parser - **for parsing content is request body**
  - Mongoose - **for easily manipulating database with builtin mongo functions**
  - Passport - **for future Facebook / Google Sign In**
  - JWT - **for token based Authentication**
  - CORS - **for cross browser requests**

### Implementing The Rest API

To implement the Rest API, do the following steps,

- Declare and export a new async function in controllers named - **_`fetchEmployeesCountryData`_**.

- Import the above function in Controllers into Routes.

- Export this - **_`fetchEmployeesCountryData`_** - function as a new route thats is a - **POST Request**, edit the URL of this route to be - **`"/api/fetchEmployeesCountryData"`**.

- In the Server File, Import the newly declared route and attach it to the **`express app`** so that the API can be exposed to the world.

---

- Before moving forward, declare a utility function in Utils named - **`fetchCountryData`**,

  - This util function should be a function that receives a parameter - **_`country`_** - whose type is string.
  - In the body of the - _`fetchCountryData`_ - function, make a post request using - **`request`** - to the given URL in the disclaimer above with the country name received in parameters as an argument.
  - In the body of request, do the following,
    - Pass the above URL as a first argument, callback function as a second argument.
    - Check for exception / error first, if error then return immediately with the error response.
    - if the request was successfully executed then return the country details fetched as a json with country name.

---

- Now moving to the Rest API's body,

  - Import Regions to be checked from the config file into an object / array.
  - Import that - _`fetchCountryData`_ - function into Controllers.
  - Start from destructing the - _`request.body`_ - object and retrieve the list of employees as a constant called - **`employees`**.
  - Check if the constant - **`employees`** even has some employees or not,
    - If it does have some employees, proceed with the rest of the API body.
    - If Not, then just return with a message "Empty Employee List" with a Not Found status code.
  - Run a loop over the employees list one by one using i.e. - **`for(let emp in employees)`**.
  - For every employee object, extract country name from it by destructuring.
  - Call - _`fetchCountryData`_ - for every iteration, passing the country name as a parameter fetched above.
  - If the function - _`fetchCountryData`_ - return a valid json with country details, append that to the current employee object as an attribute called - **countryInformation**.
    - Additionally check if the region returned existed in the regions declared in config files, append an additional attribute to employee object formatted as **`{firstName}{lastName}{dateOfBirth}`**, obviously converting date to a string.
  - Keep track of the requests using a - **`counter`**,
    - Increment the counter every time a new iteration is run and - _`fetchCountryData`_ - is called.
    - Keep a check that if - **_counter is equal to the length of employees list_**, that means every employee of the employees list has been traversed.
  - Finally when the counter is equal to the length of employees list, return a response with new updated list of employees with a success status code.
