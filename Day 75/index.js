// Express JS

// 1 Listen for incoming Request 
// 2 Parse
// 3 Match Response with routes
// 4 Response



// import express from 'express'
const express = require('express')
const app = express()
console.dir(app);

app.get('/', (req, res) => {
  res.send('Hello Coders')
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});


// *Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

app.use(req,res) => {
  console.log("Request Received");
});
