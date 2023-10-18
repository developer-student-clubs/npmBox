const ejs = require('ejs');

// Define the template
const template = `
  <h1>Welcome, <%= name %>!</h1>
  <p>Your favorite color is <%= color %> and your age is <%= age %> years old.</p>
`;

// Data to be passed to the template
const data = {
  name: 'John Doe',
  color: 'blue',
  age: 30,
};

// Render the template with the data
const renderedTemplate = <link>ejs</link>.render(template, data);

// Output the rendered template
console.log(renderedTemplate);
