const express = require('express');
const cors = require('cors');
const httpProxyMiddleware = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PROXY_PORT || 3000;

app.use(cors())

app.use(express.static('./client'));

app.listen(PORT); 