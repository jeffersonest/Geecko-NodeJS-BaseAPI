const chalk = require('chalk');
const log = console.log;

class Logger {
    info(message){
        log(chalk.yellow(message));
    }
    error(message) {
        log(chalk.red(message));
    }
}

module.exports = new Logger();