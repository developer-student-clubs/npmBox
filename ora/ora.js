import ora from 'ora';

const spinner = ora({
    text: "Loading unicorns",
}).start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);

setTimeout(() => {
	spinner.color = 'green';
	spinner.text = 'Loading earth';
    spinner.spinner = 'moon';
}, 2000);

