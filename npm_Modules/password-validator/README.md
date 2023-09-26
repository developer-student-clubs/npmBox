
# password-validator

## What is password-validator ?

- password-validator is a module for Node.js applications to allow easy validate password.

## Install:
- We can install password-validator from terminal using the command `npm install password-validator` or,
- We can install password-validator from [npm](https://www.npmjs.com/package/nodemailer)

## Rules
Rules supported as of now are:

|     Rules            |               Descriptions                                                                                                       |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------|
|**digits([count], [description])**   | specifies password must include digits (optionally provide count paramenter to specify at least n digits)                        |
|**letters([count], [description])**  | specifies password must include letters (optionally provide count paramenter to specify at least n letters)                      |
|**lowercase([count], [description])**| specifies password must include lowercase letters (optionally provide count paramenter to specify at least n lowercase letters)  |
|**uppercase([count], [description])**| specifies password must include uppercase letters (optionally provide count paramenter to specify at least n uppercase letters)  |
|**symbols([count], [description])**  | specifies password must include symbols (optionally provide count paramenter to specify at least n symbols)                      |
|**spaces([count], [description])**   | specifies password must include spaces (optionally provide count paramenter to specify at least n spaces)                        |
|**min(len, [description])**          | specifies minimum length                                                                                                         |
|**max(len, [description])**          | specifies maximum length                                                                                                         |
|**oneOf(list)**                      | specifies the whitelisted values                                                                                                 |
|**not([regex], [description])**      | inverts the result of validations applied next                                                                                   |
|**is()**                             | inverts the effect of _**not()**_                                                                                                |
|**has([regex], [description])**      | inverts the effect of _**not()**_ and applies a regex (optional)                                                                 |
|**usingPlugin(fn, [description])**   | Executes custom function and include its result in password validation                                                           |
