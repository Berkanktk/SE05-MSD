# Getting Started with Create React App
A simple TODO app made with React.

The application consists of a JSON database which is used as the Backend and a Front-end made with ReactJS. Both of them can be started with one commend, see the fast installation method below.

# Installation (Recommended)
Starts the Front-end and Back-end.
```bash
> npm install
> npm run all
```

# Installation (Manual)
If you want to start the application parts individually.
## Running the Front-end 
```bash
> npm install
> npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Running the Back-end (json-db)
Start the json-server
````bash
> json-server --watch db.json --port 5000
````

Navigate to JSON data ex.  
`localhost:5000/tasks`


## Building the project
````bash
> npm run build
> serve -s build
````

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Technologies used
[ReactJs](https://reactjs.org/) is used for the frontend development.  
[Mantine](https://mantine.dev/) is a fully featured React components library used for styling.  
[IonIcons](https://ionic.io/ionicons) is used for icons.  
[JSON Server](https://github.com/typicode/json-server) is used for the backend.