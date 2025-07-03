# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Running the Application

To run this application, you will need:

1.  **Node.js and npm:** This project is a React application, so you need Node.js and npm (Node Package Manager) installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).
2.  **Install dependencies:** After cloning the project, navigate to the project directory in your terminal and run `npm install` to install all the necessary dependencies.
3.  **Environment variables:** The application may require some environment variables to be set. These variables are typically stored in a `.env` file in the root of the project. You may need to create this file and add the necessary variables.
4.  **Run the application:** Once the dependencies are installed and the environment variables are set, you can run the application using the command `npm start`. This will start the development server and open the application in your browser.

## API Keys

The following API keys are needed for full functionality:

1.  **Fitbit API key and client ID:** To integrate with the Fitbit API and retrieve step data, you need to obtain an API key and client ID from the Fitbit Developer Portal ([https://dev.fitbit.com/](https://dev.fitbit.com/)). You will need to create a Fitbit application and configure it with the necessary permissions.
2.  **NGO notification system API key (if applicable):** If you want to integrate with a real NGO notification system, you will need to obtain an API key from the provider of that system.
3.  **Backend API endpoint:** The application currently uses mock implementations for NGO sign-up, sign-in, and fetching nearby volunteers. To connect to a real backend, you need to configure the API endpoint in the `ngoService.jsx` file.
