// importing chalk module
import chalk from 'chalk';
// or
// const chalk = require('chalk');

const log = console.log;

// We can combine style with normal string
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgYellowBright.bold('Hello Guys!'));

// We can pass multiple arguments to chalk() and it will handle it correctly
log(chalk.blue('Dharmesh','Poriya'));

// nest styles of the same type even (color, underline, background)
log(chalk.red('Hello', chalk.underline.bgGreenBright('Friends') + '!'));
log(chalk.blue(
	'I am a green line ' +
	chalk.yellow.underline.bold('with a yellow substring') +
	' that becomes green again!'
));

// ES2015 template literal
let desk = {
	CPU: '90%',
	RAM: '40%',
	DISK: '70%'
}
log(chalk.green.bgWhite(`
CPU: {red ${desk.CPU}}
RAM: {green ${desk.RAM}}
DISK: {blue ${desk.DISK}}
`));


// We can also use rgb() and hsl() to specify colors
// log(chalk.keyword('orange')('boom!! orange colored text'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

// We can also define our own theme

const success = chalk.green;
const error = chalk.bold.red;
const warning = chalk.yellowBright;

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Dharmesh Poriya';
// here %s is a placeholder for name
console.log(chalk.green('Hello %s'), name);

// tagged template literal
// use of tagged template literal is to pass a function as a first argument to a template literal
// here chalk is a function and we are passing it as a first argument to template literal
const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk.green.bold(calculateFeet(miles)));