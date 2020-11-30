const { response } = require('express');
var express = require('express');
const { request } = require('http');
var path = require('path');

const app = express();
const pathToIndex = path.resolve(__dirname, '../client/index.html');
app.use('/*', (request, response) => {
    response.sendFile(pathToIndex);

}
)

module.exports(export(app));