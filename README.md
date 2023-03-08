# RANDOM USER GENERATOR APP

Web application developed in Reactjs that consumes the [randomuser.me](https://randomuser.me/) API to generate random users.\
In the development of this app were used libraries such as axios for HTTP requests, react-router-dom for handling routes within the application and material-ui for interface design.\
This simple application is developed under a modular architecture that will allow you to scale if necessary, in addition to allowing the reuse of components.\
The tests were created to test the rendering of the components, however due to compatibility errors with libraries such as axios or with the use of contextAPI some of the tests are missing.

**DEPLOY:** This app is deployed and can be proved clicking [here](https://espinosadvlpr.github.io/random-user-generator).

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors and warnings in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.