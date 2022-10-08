const express = require('express');
const fastbootMiddleware = require('fastboot-express-middleware');
const FastBootAppServer = require('fastboot-app-server');
const ExpressHTTPServer = require('fastboot-app-server/src/express-http-server');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
var bodyParser = require('body-parser')

const httpServer = new ExpressHTTPServer({
  port: 8088
});
const app = httpServer.app;

app.use(xss());
app.use(compression());

app.use('/assets', express.static('./server/public/assets'));
app.use('/api', express.static('./server/public/api'));
app.use('/images', express.static('./server/public/images'));

app.use('/email', bodyParser.json());
app.post('/email', (req, res)=>{
  console.log('POST email');
  const {nom, email, message} = req.body;
  res.status(200).json({
    status:'OK',
    data:{
      nom:nom,
      email:email,
      message:message,
    }
  })
})


let server = new FastBootAppServer({
  httpServer: httpServer,
  distPath: './server/public',
  gzip: true, // Optional - Enables gzip compression.
  host: '0.0.0.0', // Optional - Sets the host the server listens on.
  port: 8087, // Optional - Sets the port the server listens on (defaults to the PORT env var or 3000).
  buildSandboxGlobals(defaultGlobals) { // Optional - Make values available to the Ember app running in the FastBoot server, e.g. "MY_GLOBAL" will be available as "GLOBAL_VALUE"
    return Object.assign({}, defaultGlobals, { });
  },
  log: true, // Optional - Specifies whether the server should use its default request logging. Useful for turning off default logging when providing custom logging middlewares
  chunkedResponse: true
});

server.start();




 