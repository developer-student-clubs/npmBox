const yup = require('yup');

/*
    1. Here, we first import the yup module and define a schema using the object().shape() method. The schema specifies the validation rules for each field in the data object.
    2. We then create a data object with values for the name, email, and age fields. We use the validate() method of the schema to validate the data against the defined schema. 
    3. If the data is valid, the validate() method returns the validated data. Otherwise, it throws a validation error with the corresponding error message.
*/

// Define a schema for validation
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  age: yup.number().positive('Age must be a positive number').required('Age is required'),
});

// Data to be validated
const data = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 25,
};

// Validate the data against the schema
schema.validate(data)
  .then(validatedData => {
    console.log('Data is valid:', validatedData);
  })
  .catch(error => {
    console.log('Validation error:', error.message);
  });

// Output
// Data is valid: { name: 'John Doe', email: 'johndoe@example', age: 25 }
