const express = require('express');
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const app = express();

const analtyicsService = 'http://localhost:3000';

app.all('/*', (req, res) => {
  console.log('proxy redirect successful');
  apiProxy.web(req, res, {target: analtyicsService});
});

app.listen(3001, () => console.log('proxy listening on 3001'))