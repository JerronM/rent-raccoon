import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGiic_STmhRcxNY_n7NiP4SRScBQR-akg",
    authDomain: "rent-raccoon.firebaseapp.com",
    projectId: "rent-raccoon",
    storageBucket: "rent-raccoon.appspot.com",
    messagingSenderId: "761567971890",
    appId: "1:761567971890:web:9275009016665a93720a2b",
    measurementId: "G-XFF0VKBGXY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };