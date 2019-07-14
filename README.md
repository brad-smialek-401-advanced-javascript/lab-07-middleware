
# LAB - 07

## middleware

### Author: Brad Smialek

Middleware, Routing, Modularization Practice


### Links and Resources
* [submission PR](https://github.com/brad-smialek-401-advanced-javascript/lab-07-middleware)
* [front-end] localhost:8080


### Modules
#### `router.js`
#### `server.js`

##### Exported Values and Methods


###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
* `PORT` - 8080


#### Running the app
* `nodemon`
* Endpoint: `/a`
  * res.status(200).send('Route A');
* Endpoint: `/b`
  * res.status(200).send(`Route B, numbers = ${req.number} `);
* Endpoint: `/c`
  * res.status(200).send('Route A');
* Endpoint: `/d`
  * res.status(200).send(`Route B, numbers = ${req.number} `);
  
#### Tests
* jest
* npm test file.test.js

* What assertions were made?

* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events
