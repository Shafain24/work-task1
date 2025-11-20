import chalk from 'chalk';

function showWelcome(message) {
    console.log(chalk.green(message));
}

function showError(message) {
    console.log(chalk.red(message));
}

function showWarning(message) {
    console.log(chalk.yellow(message));
}

function showInfo(message) {
    console.log(chalk.blue(message));
}

function displayMenu() {
    console.log(chalk.cyan('=== Main Menu ==='));
    console.log(chalk.green('1. Start Application'));
    console.log(chalk.yellow('2. Settings'));
    console.log(chalk.red('3. Exit'));
    console.log(chalk.blue('4. Help'));
}

function demo() {
    showWelcome('Welcome to the Node Assessment App!');
    showError('Error: Something went wrong!');
    showWarning('Warning: Be careful with your input.');
    showInfo('Info: This is some informational message.');
    displayMenu();
}

demo();