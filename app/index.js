const cronJob = require('./cronJobs');
const lightsRouter = require('./lights/index');
const bridgesRouter = require('./bridges/index');
const nexaRouter = require('./nexa/index');
const hueApi = require("./hueApi/hueApi");
const express = require('express');
const app = express();
const appRoot = require('app-root-path');
const config = require(appRoot + '/config');
const port = config.web.port;
//const port = 8080;

hueApi.findHost();

//Routing to sub URLs
app.use('/lights', lightsRouter);
app.use('/bridges', bridgesRouter);
app.use('/nexa', nexaRouter);

global.lat = '36.7201600';
global.long = '-4.4203400';

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

cronJob.scheduleFetchDayLight();