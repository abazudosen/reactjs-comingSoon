import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyDvYTo19rieJzWP8R47QUftgsizFsO2fpw",
  authDomain: "tunesbid-a0909.firebaseapp.com",
  databaseURL: "https://tunesbid-a0909.firebaseio.com",
  projectId: "tunesbid-a0909",
  storageBucket: "tunesbid-a0909.appspot.com",
  messagingSenderId: "507676004942",
  appId: "1:507676004942:web:afa16125e5824f6c01291f",
  measurementId: "G-Q86XPMGY5M",
});

var db = firebaseApp.firestore();

export { db };
