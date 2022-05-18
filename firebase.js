import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBBOUbz3SBsoEmd1LO6TWM5wGUJ1pBwL2s",
    authDomain: "signal-clone-44330.firebaseapp.com",
    projectId: "signal-clone-44330",
    storageBucket: "signal-clone-44330.appspot.com",
    messagingSenderId: "611876914218",
    appId: "1:611876914218:web:6567d137f208684c436f53"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);

  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth};