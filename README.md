
# LAB - 07

## middleware

### Author: Brad Smialek




### Requirements
Middleware, Routing, Modularization Practice
- Create a repository called lab-07-middleware and copy the contents of the starter-code/middleware folder into it
- Complete the following tasks in the server.js file
- Write error handling middleware
- Write not found middleware and a catch-all route that uses it
- Write middleware that runs on every route that adds a property called requestTime with a value of the current Date/Time to the request object
- Write middleware that runs on every route that will run a console.log() containing the method, path, and the new property requestTime from the request
- Write middleware that runs only on the /d route that raises an error using next
- Write middleware that runs only on the /b route that takes a number as a parameter, squares it, and and sets that value on the request object in a property called number
- Alter the /b route to .send() that number from the request object to the browser
- Ensure that all of your routes and middleware work as expected
- Create a router in a separate file called routes.js
- Move just the /c and /d routes into it
- Export it
- Import it into the server file and properly use() it

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events