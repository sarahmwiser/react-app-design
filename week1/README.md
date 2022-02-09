# Week 1

## React vs jQuery

- Speed
- Virtual DOM
- Scalabity 

## JSX


## Compoments


## Virtual DOM


## Setting up React

### Create React App

Create React App is a toolchain built and maintained by developers at Facebook for bootstrapping React applications. You simply run one command and Create React App sets up the tools you need to start your React project. It will create an initial project structure and install the transitive dependencies to run a React application.

#### Basic Features

  Running npm start will fire up a <a href="https://webpack.js.org/configuration/dev-server/">webpack development server</a> with a <a href="https://webpack.js.org/configuration/watch/#watch">watcher</a> that will automatically reload the application once you change something. The "automatic reload" is a feature implemented by a package called <a href="https://www.npmjs.com/package/react-refresh">react-refresh</a> that is used by Webpack. This will re-render in the browser the parts of your codebase you are developing in real-time (instead of refreshing your browser - but loosing your state change).

  Babel is a transpiler which converts one type of source code to another type of source code. In this case you are converting JSX into regular JavaScript (that the browser JS engine can understand). 

  Styling. Create React App allows you to add styles by just importing the required CSS files. When building the application, all of the CSS files will be concatenated into a single bundle and added to the build folder.  
  
  Create React App also supports CSS modules. By convention, files named as *.module.css are treated as CSS modules. This technique allows us to avoid conflicts of CSS selectors, since Create React App will create unique class selectors in the resulting CSS files.



```JS
npx create-react-app
```



### Parcel