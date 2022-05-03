## Movie Reviewer Database App - Part 3



### React Asynchronous Data

Usually, data from a remote backend/database arrives asynchronously for client-side applications like React. Thus it’s often the case that we must render a component before we can initiate the data fetching. 



### Conditional Rendering

A ```conditional rendering``` in React always happens if we have to render different JSX based on information (e.g. state, props). Dealing with asynchronous data is a good use case for making use of conditional rendering. 

For example, when the application initializes for the first time, there is no
data to start with. Next, we are loading data and eventually, we have the data at our hands to display it. Sometimes the data fetching fails and we receive an error instead. 


### Styling


