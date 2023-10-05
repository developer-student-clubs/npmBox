const express = require('express');
const app = express();

const pug = require('pug');

const port = 80;

// Pug specific stuff
app.set('view engine', 'pug'); 

app.get('/', (req, res)=>{
    const params = {'title': 'This is a Title', "content": "This is the best content"}

    // Express.js renders the template using Pug
    res.status(200).render('../index.pug', params);
});

// Starting the Express server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

// Pug template
const template = `
body
  h1
    | #{title}
    // here title accepting stuff as a variable 
  p
    | #{content}
`;

// Data for the Pug template
const title = 'This is a Title';
const content = 'This is the best content';

// Compile the Pug template and render it
const cf = pug.compile(template);
const rh = cf({ title, content });

// Printing
console.log(rh);
