import firebase from "firebase"

const config = {
    apiKey: "AIzaSyDfSq_80a8Ol07LpOk-AseBZGHyQQpB10E",
    authDomain: "event-app-beb6c.firebaseapp.com",
    databaseURL: "https://event-app-beb6c.firebaseio.com",
    projectId: "event-app-beb6c",
    storageBucket: "event-app-beb6c.appspot.com",
    messagingSenderId: "254976701401"
  };

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child("events")
