// This is a NodeJS/Express app
// let's begin by including some packages:

// express is a minimalist web framework for node.
// https://www.npmjs.com/package/express
const express = require ('express'); 

// axios is an HTTP client for the browser and node.js
// https://www.npmjs.com/package/axios
const axios = require('axios');  

// middleware that can be used to enable CORS
// https://www.npmjs.com/package/cors
const cors = require('cors');         

// dotenv loads environment variables 
// from a .env file into process.env
// https://www.npmjs.com/package/dotenv
const dotenv = require('dotenv').config()

// Initialize Express
const app	= express();  

// Middleware 
// https://expressjs.com/en/guide/using-middleware.html

// Middleware to add CORS headers to responses
app.use( cors() )          

// Middleware to add JSON capabilities to our express app
app.use( express.json() )  

// Middleware to serve up static assets (e.g. the front end!)
// by mapping the base url to the /public folder
// see also: https://expressjs.com/en/starter/static-files.html
app.use('/', express.static('public')) 

// Let's make our own '/search' endpoint!
// it listens for GET requests (word searches) from the frontend.
// it then asks the Oxford API for definition(s)
// and relays the response back to the frontend
app.get('/search/:word', (req, res) => {
  // extract the word from the endpoint url
  let word = encodeURIComponent( req.params.word);  
  // Setup Oxford API options for axios
  // API keys are pulled from environment variables
  // See also: https://developer.oxforddictionaries.com/documentation
  const options = {
    method: 'GET',
    url: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-us/'+word,
    headers: {
      app_key: process.env.OXFORD_KEY,
      app_id: process.env.OXFORD_ID
    }
  } 
  // axios makes requests from Oxford API
  axios.request(options).then((response) => { 
    // relay the response from Oxford back to the frontend.
    res.send(  response.data ) 
  }).catch( (error) => {
    // if there is an error, send a message to the frontend.
    res.send( { error: error.message })
  })
})

// Setup a port number to listen on:
// First check for an environment variable
// Otherwise use 5000 by default.
const port = process.env.PORT || 5000

// Go live using the port. 
app.listen(port, () => {
  console.log("We are live on port "+port )
})