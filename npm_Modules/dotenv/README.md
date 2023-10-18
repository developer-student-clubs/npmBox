# Dotenv

`dotenv` is an npm module that allows you to load environment variables from a .env file into your Node.js applications. It simplifies the process of managing 
and accessing sensitive information, such as API keys, database credentials, or any other configuration values, by storing them in a separate file instead of 
hardcoding them in your codebase. 

# Installation

For local installation (recommended):
```
  $ npm install dotenv --save
```

# Usage

Create a .env file in the root of your project:
```
  YOUR_API_KEY = "xyz"
  YOUR_SECRET_KEY = "abc"
```

Import and configure dotenv
```
  import 'dotenv/config'
```

Now `process.env` has the keys and values we defined in .env file
```
  /// some code
  greatFunction(process.env.YOUR_API_KEY);
```

For more info, refer [docs](https://www.dotenv.org/docs/)


# Features

- Easy Configuration: dotenv makes it easy to configure your application by storing environment-specific variables in a .env file.
- Separation of Concerns: By keeping sensitive information in a separate file, you can easily manage different configurations for different environments
  (e.g., development, staging, production) without modifying your code.
- Environment Variable Loading: dotenv automatically loads the variables from the .env file into process.env during the application startup phase.
- Variable Parsing: The module supports parsing variables of different types, such as strings, numbers, booleans, and arrays, allowing you to handle
  complex configuration setups.
- Compatibility: dotenv is compatible with various frameworks and libraries, including Express, Koa, and other Node.js applications.
- Error handling: dotenv provides error handling mechanisms, such as throwing an error if the .env file is missing or if there are any syntax errors in the file.
- Security: By storing sensitive information in a separate .env file, you can better protect your credentials, as this file can be excluded from version
  control systems.
