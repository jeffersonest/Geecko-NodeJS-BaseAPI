const express = require('express');
const Logger = require('./helpers/logger');
const routes = require('./routes');

class BaseServer {
    App = express();
    constructor(){
        this.initRoutes();
    }
    start(port) {
        this.App.listen(port || 3000, () => {
            Logger.info(`Server listening on [${port}]`);
        });
    }
    initRoutes() {
        this.App.use(routes);
    }
}

module.exports = new BaseServer();