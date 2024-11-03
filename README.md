# Firebase Authentication

[![Live Link](https://img.shields.io/badge/Live%20Link-Firebase%20Authentication-blue)](https://firebase-authentication-login-app.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Firebase%20Authentication-green)](https://github.com/saurabhmaurya45/firebase-authentication)

Welcome to the Firebase Authentication project! This application provides a complete authentication solution with Firebase, including email and password login, Google Sign-In, password reset, and protected routes.

## 🍕 Features

✅ **Email & Password Authentication**: Register and log in securely with email and password.  
✅ **Google Sign-In**: Enable users to log in with their Google account.  
✅ **Forgot Password**: Easily recover accounts via email with a custom password reset page.  
✅ **Protected Routes**: Keep routes secure by restricting access to authenticated users only.  
✅ **Redirect Functionality**: Intelligent redirects to the originally intended route after login.  
✅ **Custom Auth Hook (`useAuth`)**: Efficiently manage authentication state and actions.  
✅ **Loading Indicators**: Visual feedback during the sign-in and sign-up processes.

## ⚙ Technology Used

✅ **React**: A JavaScript library for building user interfaces.  
✅ **Firebase**: Provides backend services for authentication, storage, and more.  
✅ **React Router**: Manages routes and navigation within the application.

## 🚀 Getting Started

### Installation and Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/saurabhmaurya45/firebase-authentication.git
    cd firebase-authentication
    ```

2. **Install dependencies:**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

    ```bash
    npm install
    ```

3. **Set up Firebase Configuration:**

    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Add a new web app to get your Firebase configuration settings.
    - Enable **Email/Password** and **Google** sign-in methods in the Firebase Authentication settings.
    - Copy your Firebase config settings and add them to a `.env` file in the project root:

      ```plaintext
      REACT_APP_FIREBASE_API_KEY=your_api_key
      REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
      REACT_APP_FIREBASE_PROJECT_ID=your_project_id
      REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      REACT_APP_FIREBASE_APP_ID=your_app_id
      ```

4. **Run the development server:**

    Start the React development server:

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 🌟 Give It a Spin!

Explore the fully functional Firebase Authentication app here: [Live Demo](https://firebase-authentication-login-app.netlify.app/)

## 📝 License

This project is licensed under the [MIT License](LICENSE).
