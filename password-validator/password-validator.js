var passwordValidator = require('password-validator');

const schema = new passwordValidator();

schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values



//it is a true answer because password passesd all criteria
console.log(schema.validate('validPASS123'));

//it gives a flase answer because password has only one digit
console.log(schema.validate('validPASS1'));

//it list a criteria which is not satisfied using { list: true }
console.log(schema.validate('valid Pass1', { list: true })); //[ 'digits', 'spaces' ]

//it give a details of criteria which is not satisfied using { details: true }
console.log(schema.validate('valid Pass1', { details: true }));
// [
//     {
//       validation: 'digits',
//       arguments: 2,
//       message: 'The string should have a minimum of 2 digits'
//     },
//     {
//       validation: 'spaces',
//       inverted: true,
//       message: 'The string should not have spaces'
//     }
//   ]


//custom validation 
schema.not().uppercase(8, 'maximum 8 chars in CAPS please')
//on failure it gives a output 
// {
//     validation: 'min',
//     arguments: 8,
//     inverted: true,
//     message: 'maximum 8 chars in CAPS please'
//   },


//plugins

var validator = require('validator');
var passwordValidator = require('password-validator');

var pschema = new passwordValidator()
    .min(3, 'Password too small')
    .usingPlugin(validator.isEmail, 'Password should be an email');

console.log(pschema.validate('bhavin', { details: true }));

//it give a error when password is not isEmail
// [
//     {
//       validation: 'usingPlugin',
//       arguments: <ref *1> [Function: isEmail] { default: [Circular *1] },
//       message: 'Password should be an email'
//     }
//   ]
