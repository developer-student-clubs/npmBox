/// Import the module
import ora from 'ora';

/// Create instance of spinner
/// Way 1
const spinner = ora({

    /// Set prefix text for spinner
    // prefixText:"Prefix text",

    /// Hide terminal cursor 
    /// By default it is true
    // hideCursor:false,

}).start();

/// Way 2
// const spinner = ora().start();

setTimeout(() => {

    /// Set colors of spinner 
	spinner.color = 'yellow';

    /// Set suffix text of spinner
	spinner.text = 'Loading rainbows';

}, 1000);

setTimeout(() => {
	spinner.color = 'green';
	spinner.text = 'Loading moon';

    /// Set the interval of the frames 
    /// By default it is 100
    spinner.spinner.interval = 150;

    /// Set the design of the spinner
    // spinner.spinner = 'moon';

    /// Add coustom spinner 
    spinner.spinner = {
        interval : 100,
        frames : [
            '+','-',
        ]
    }


}, 2000);

setTimeout(() => {
    /// Stops the timer with ✔ {text}
    spinner.succeed("Succeded");
    /// Stops the timer with ❌ {text}
    spinner.fail("Failed");
    /// Stops the timer with ℹ {text}
    spinner.info("Info");

}, 3000);
