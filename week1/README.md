## Movie Reviewer Database App - Part 1

### Create React App 

<a href="https://create-react-app.dev/">Create React App</a> is a build tool-chain that scaffolds a new React project. It includes the following tools:

- <a href="https://www.npmjs.com/package/react">react</a> and <a href="https://www.npmjs.com/package/react-dom">react-dom</a> packages
- Babel to ```transpile``` the JSX to react elements (DOM elements)
- Webpack to ```bundle``` all the files into one file
- Webpack devServer to ```listen``` for changes and run the ```build``` and ```serve``` the new files
- Jest and React-Testing-Library to support code and DOM tests
- ESLint for code checking
> In the project directory, run the command:

#### npm start

Runs the app in development mode.
 - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

> The page will reload when you make changes. Look in the browser console for errors or linting warnings.

#### Issues with installing packages

If you ever run into issue with installing packages with some odd errors in your React project follow these steps:

 1. Delete the package-lock.json file (tracks sub-dependencies of your packages)
 2. Delete the node_modules folder
 3. Type ```npm install`` in the terminal (root project path)
