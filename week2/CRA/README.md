## Movie Reviewer Database App - Part 2

### Routing

Single-page applications (SPAs) are web apps that load once and then dynamically
update elements on the page using JavaScript. 

A URL is a reference to a web resource. We can think of the URL as being an
external keeper of state. By storing pieces of app state up at the level of the browser’s
location, we can enable users to bookmark the link, refresh the page, and share it
with others.

In a traditional web application with minimal JavaScript, the request flow for this
page might look like this:

 1. Browser makes a request to the server for this page
 2. The server uses the identifiers in the URL to retrieve data from a database.
 3. The server returns a populated HTML document along with any other assets
like CSS and images.
 4. The browser renders these assets.

 An evolution of that request flow using React might look like this:

 1. Browser makes a request to the server for this page.
 2. The server doesn’t care about the pathname. Instead, it just returns a standard that includes the React app and any static assets index.html.
 3. React app mounts.
 4. The React app extracts the identifiers from the URL and uses these identifiers
to make an API call to fetch the data.
 5. The React app renders the page using data it received from the API call.

 When the user request to view a new "page" in a React app, the browser already contains the full React app. There’s no need to have the browser make a new request to fetch the same app again from the server and re-mount it. The React app just needs to update the
 URL and then re-render itself with a new component-tree with the new data.

This is the idea of a ```JavaScript router```. 

Routing involves two primary pieces of functionality: 

- (1) Modifying the location of the app (the URL)
- (2) determining what React components to render at a given location

There are many routing libraries for React, but the community’s clear favorite is
<a href="https://reactrouter.com/">React Router</a>. React Router gives us a wonderful foundation for building rich applications that have hundreds or thousands of React components across many different views and URLs.

```JS
// index.js:

import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
    <App />
</BrowserRouter>

// App.jsx

import { Routes, Route, Outlet, Link } from "react-router-dom";

 <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
 </ul>

 <Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="dashboard" element={<Dashboard />} />
 </Routes>
```

#### Official documentation

This is all you need to use: <a href="https://reactrouter.com/docs/en/v6">https://reactrouter.com/docs/en/v6</a>

### State

Both concepts, ```props``` and ```state```, have clear defined purposes: While props are used to pass information down the component hierarchy, state is used to change information over time. 

Functions starting with use are called Hooks. ```useState``` is a built-in Hook provided by React. You can find other built-in Hooks in the React API reference. You can also write your own Hooks by combining the existing ones.

By using useState, we are telling React that we want to have a stateful value which changes over
time. And whenever this stateful value changes, the affected components will re-render to use it. 

Calling the useState method will return an array with two entries: 

 - The fist entry represents the current state.
 - The second entry is a function to update this state.

```JS

import {useState} from 'react'

function App () {
   const [searchTerm, setSearchTerm] = useState('');
 
   ...
```

![useState](images/use-state.png)

```JS
const handleChange = (event) => {
   setSearchTerm(event.target.value);
};
```

> Every component in a React application has one initial rendering followed by potential re-renderings.

Usually the initial rendering happens when a React component gets displayed in the browser. Then
whenever a side-effect occurs, like a user interaction (e.g. typing into an input field, API fetch call, etc.), the change is captured in React’s state which forces a re-rendering of all the components affected by this change (e.g. component that manages the state and all its descendant components).

![State flow](images/state-flow.png)

### Event Handling



