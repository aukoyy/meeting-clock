import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import firebase from "firebase";

// var config = {
//     apiKey: "AIzaSyBfUQO3Hr2-I28tSsfqQ2107aGiiakiwbM",
//     authDomain: "meeting-clock.firebaseapp.com",
//     databaseURL: "https://meeting-clock.firebaseio.com",
//     projectId: "meeting-clock",
//     storageBucket: "meeting-clock.appspot.com",
//     messagingSenderId: "1014241843023"
//   };
// firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
