# Grunt

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. It uses a command-line interface to run custom tasks defined in a file (known as a Gruntfile).

## Why Grunt?

Grunt is a generic task-runner for Node. js projects with a huge library of plugins. By automating tasks, you can streamline processes for your project (and reduce human error on your team). The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes.

## Getting started

Grunt and Grunt plugins are installed and managed via npm, the Node.js package manager. Grunt 0.4.x requires stable Node.js versions >= 0.8.0

- Before setting up Grunt ensure that your npm is up-to-date by running.
``` npm update -g npm ```

- Installing CLI
``` npm install -g grunt-cli ```

- Preparing a new Grunt project
A typical setup will involve adding two files to your project: package.json and the Gruntfile.
1. **package.json**: This file is used by npm to store metadata for projects published as npm modules. You will list grunt and the Grunt plugins your project needs as devDependencies in this file.

2. **Gruntfile**: This file is named Gruntfile.js or Gruntfile.coffee and is used to configure or define tasks and load Grunt plugins. When this documentation mentions a Gruntfile it is talking about a file, which is either a Gruntfile.js or a Gruntfile.coffee.


#### package.json

The package.json file belongs in the root directory of your project, next to the Gruntfile, and should be committed with your project source. Running npm install in the same folder as a package.json file will install the correct version of each dependency listed therein.

There are a few ways to create a package.json file for your project:

- Most [grunt-init](https://gruntjs.com/project-scaffolding) templates will automatically create a project-specific package.json file.
- The ```npm init``` command will create a basic package.json file.

#### Gruntfile

The Gruntfile.js or Gruntfile.coffee file is a valid JavaScript or CoffeeScript file that belongs in the root directory of your project, next to the package.json file, and should be committed with your project source.

A Gruntfile is comprised of the following parts:

- The "wrapper" function
- Project and task configuration
- Loading Grunt plugins and tasks
- Custom tasks

## Further Reading
- The [Installing grunt](https://gruntjs.com/installing-grunt/) guide has detailed information about installing specific, production or in-development, versions of Grunt and grunt-cli.
- The [Configuring Tasks](https://gruntjs.com/configuring-tasks/) guide has an in-depth explanation on how to configure tasks, targets, options and files inside the Gruntfile, along with an explanation of templates, globbing patterns and importing external data.
- The [Creating Tasks](https://gruntjs.com/creating-tasks/) guide lists the differences between the types of Grunt tasks and shows a number of sample tasks and configurations.
- For more information about writing custom tasks or Grunt plugins, check out the [developer documentation](https://gruntjs.com/grunt).