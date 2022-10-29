# tailwindcss npm example

## What is TailWindCSS?
A utility-first CSS framework packed with numerous classes. It helps to build UI faster with it's classes.

[TailWindCSS Link](https://www.npmjs.com/package/tailwindcss "TailWindCSS")

Here in this example it includes the example of tailwindcss with npm.

## Folder Structure
    .
    ├── dist
    |    └── style.css           # TailwindCSS Output File
    ├── screenshot
    |    └── result.png          # Result Screenshot
    └── src                     
        ├── index.html           # Main HTML File
        └── style.css            # Custom CSS Style
        

## How to use Tailwind CSS with NPM?

1. Run the command to generate **package.json** file
```
npm init -y
```
2. Run the following command to install tailwindcss
```
npm install -D tailwindcss
```
3. Run the command to generate **tailwind.config.js** which include the configuration of the tailwind css.
```
npx tailwindcss init
```
4. Run the command to to scan your template files for classes and build your CSS.
```
npx tailwindcss -i ./src/style.css -o ./dist/style.css --watch
```
Now You're able to load **dist/style.css** as tailwind css file.

Run the HTML File to see the Result, You may check **screenshot/result.png** to see the result.

## Thank You!!

