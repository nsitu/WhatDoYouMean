const dotenv = require('dotenv').config()
const express = require ('express');  // web app framework
const axios = require('axios');  // library for making requests
const cors = require('cors');         // Cross Origin Resource Sharing

const app	= express();      // enable express
app.use( cors() );          // make express attach CORS headers to responses
app.use( express.json() );  // add json capabilities to our express app

app.use('/', express.static('public')) 

// Forward requests for words to Oxford API and send back the response
app.get('/search/:word', (req, res) => {

  let word = encodeURIComponent( req.params.word);  
  console.log('searching for '+word);
  const options = {
    method: 'GET',
    url: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-us/'+word,
    headers: {
      app_key: process.env.OXFORD_KEY,
      app_id: process.env.OXFORD_ID
    }
  }; 
  axios.request(options).then((response) => { 
    res.send(  response.data ) 
  }).catch( (error) => {
    res.send( { error: error.message })
  });
 
});

//Go live
app.listen(0, () => {
  console.log("We are live " );
});