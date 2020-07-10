const Env = require('dotenv').config();
const express = require('express');
const Logger = require('./helpers/logger');
const routes = require('./routes');
const morgan = require('morgan');

class BaseServer {
    App = express();
    Port = process.env.PORT;
    constructor(){
        this.initMiddlewares();
        this.initRoutes();
    }
    start() {
        this.App.listen(this.Port, () => console.log(`App listening on PORT: ${this.Port}`))
    }
    initMiddlewares() {
        this.App.use(morgan('[Method::method] [Url::url] [Header::req[header]] [Status::status] [Size::res[content-length]] - :response-time ms'))
    }
    initRoutes() {
        this.App.use(routes);
    }
}

module.exports = new BaseServer();