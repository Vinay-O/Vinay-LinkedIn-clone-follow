import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCSLOsfLtAYT7ybA-h2z9k91wvKbw0cqxY",
    authDomain: "linkedln-clone-43895.firebaseapp.com",
    projectId: "linkedln-clone-43895",
    storageBucket: "linkedln-clone-43895.appspot.com",
    messagingSenderId: "888345844825",
    appId: "1:888345844825:web:92d51c9f854045cb67a548",
    measurementId: "G-EE04EGRLLD"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db,firebase };