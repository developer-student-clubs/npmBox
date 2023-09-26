
const S = require('string');

/* Here are some the good first function that are gift of string.js from npm */

/*
 * chompRight (suffix)
 *   Removes the given string from the end of string.
 *
 *   @param {string} 'main_string' the string to manipulate
 *   @param {string} 'suffix' the string to cutoff from end
 *   @return {string} the final string after processing
 *
 *   S('main_string').chompRight('suffix').s;
 */

S('foobar').chompRight('bar').s; //'foo'
S('foobar').chompRight('foo').s; //'foobar' because no substring presents at the end which is 'foo'.

/*
 * - capitalize(string)
 *    Capitalizes the first character of a string.
 *
 *   @param {string} main_string
 *   @return {string} final_ans
 *
 *   S('main_string).capitalize().s;
 */

S('jon').capitalize().s; //'Jon'
S('JP').capitalize().s; //'Jp'

/*
 * camelize(string)
 *  Remove any underscores or dashes and convert a string into camel casing.
 *
 * @param {string} main_string
 * @return {string} final_ans
 *
 * S(main_string).camelize().s;
 */

S('data_rate').camelize().s; //'dataRate'
S('background-color').camelize().s; //'backgroundColor'
S('-moz-something').camelize().s; //'MozSomething'
S('_car_speed_').camelize().s; //'CarSpeed'
S('yes_we_can').camelize().s; //'yesWeCan

/*
 * dasherize()
 *  Returns a converted camel cased string into a string delimited by dashes.
 *
 *  @param {string} main_string
 *  @return {string} final_ans
 *
 *  S(main_string).dasherize().s;
 */

S('dataRate').dasherize().s; //'data-rate'
S('CarSpeed').dasherize().s; //'-car-speed'
S('yesWeCan').dasherize().s; //'yes-we-can'
S('backgroundColor').dasherize().s; //'background-color'

// RADHE RADHE RAM RAM
