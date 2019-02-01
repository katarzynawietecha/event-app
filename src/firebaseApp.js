import firebase from "firebase"

const config = {
    apiKey: "AIzaSyDfSq_80a8Ol07LpOk-AseBZGHyQQpB10E",
    authDomain: "event-app-beb6c.firebaseapp.com",
    databaseURL: "https://event-app-beb6c.firebaseio.com",
    projectId: "event-app-beb6c",
    storageBucket: "event-app-beb6c.appspot.com",
    messagingSenderId: "254976701401"
  };

export const firebaseApp = firebase.initializeApp(config);
// export const firebase = firebase

// Real time events database - it allows to share events on the spot
// We access to database and create a new section called "events"
// Firebase will listen for any interaction with this reference and automatically update our database and our code
export const eventsRef = firebaseApp.database().ref().child("events")
