const chalk = require('chalk');
const log = console.log;
const error = console.error;

class Logger {
    info(message){
        log(chalk.yellow(message));
    }
    error(message) {
        error(chalk.red(message));
    }
}

module.exports = new Logger();