// First Install morgan,fs,path module:
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
/*
store log out in access.log
if there is no file named access.log ,flags:'a' will create and store it.
*/
const accesslog = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('tiny', { stream: accesslog }))
// Alternative for preset 'tiny',
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// Following the ':' symbol are morgan functions called tokens. You can use the format string to define tokens create your own custom morgan middleware.method is token which is built in so no neet to create own toker.

// -  Create a new named format
// morgan.token("custom", ":http-version (:method) :url => :status")
//use the new format by name
// app.use(morgan('custom'))

app.get('/', function (req, res) {
    res.send('<h1>Hello, world!</h1>')
})
app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT)
})

/*  Type npm start in console and http logs will store in access.log
visit http://localhost:3000/
visit http://localhost:3000/home

GET / 304 - - 2.439 ms
GET / home 304 - - 2.660 ms
*/