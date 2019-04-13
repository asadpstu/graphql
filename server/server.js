const express = require('express');
const GraphQL = require('express-graphql');
const app = express();

// Creating node Server
app.listen(4000,()=>{
  console.log("App is listening to 4000 Port");
});


// Creating Graphql End-point
app.use('/graphql',GraphQL({
  
}));