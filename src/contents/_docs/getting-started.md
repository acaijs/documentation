---
title: 'Getting Started'
date: '2021-27-07'
excerpt: 'Getting Started'
---

# Getting Started

We are assuming that you are going to use our application boilerplate. But if you wish to build your own application from the ground up. You can checkout how to start each individual module in their respective tabs. So you can git clone our repository:


```js
  git clone https://github.com/AcaiJS/modules
```

After cloning, you can run yarn/npm. Now you are going be presented with a simple project setup, with authentication and registration. There you can see usage of the query builder, model, config, all the base modules. Each part being easily removable or extendable. You can run the project by running `yarn start` on the console.

The first directory shown, is app, this is where all of your application files will go into, all outside of this can be considered as configuration. Following we have config, this directory contains all configurations related to any service used during your app lifetime, such as database, providers, paths and middlewares. In innterfaces you can store overwrites to our own interfaces, such as ApplicationRequest, that is what you receive in your controllers when a request is made. For last in this first row, we have your routes, all files placed directly inside of it will be automatically loaded, you can learn more about it in the router section.

Now we are going to take a look inside of the application folder. Controllers are the final point in your application lifecycle, they are what are actually going to receive the requests and handle them. For now we have only HTTP controllers, but we plan on adding socket and NATS controllers. Exceptions are custom exceptions that you can use to render custom messages to the frontend, or even log and sanitize things before being actually thrown. Middlewares are a pipeline that is run before/after your request is completed, they can pass or fail, meaning that the request will never reach the controllers, they are useful for authentication and such. Models are part of the ORM paradigm, a neat and easy way to handle reusable formats of data. Presenters are the best way to sanitize your data for the frontend/API without having to taint your model, they are easily configurable and smart to understand a model from a list of models. Providers are services that need to be bootstrapped, they also can handle errors pertinent to them (you can filter it). Validators are request filters that easily validate and masks values coming from the body. For last views are static files (a template engine has not been provided yet) that you can serve from the response utility.