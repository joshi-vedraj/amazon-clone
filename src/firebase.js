import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyA58fSIQwEes-QYMAd6fsk7d0cCNQfegt8",
    authDomain: "clone-14423.firebaseapp.com",
    projectId: "clone-14423",
    storageBucket: "clone-14423.appspot.com",
    messagingSenderId: "108487382665",
    appId: "1:108487382665:web:bd0f5bc92576579e131858",
    measurementId: "G-KPTBS25N1M"
  };

  const app = initializeApp(firebaseConfig);

  // Use these for db & auth
  // const db = firebaseApp.firestore();
  const auth = getAuth(app);
  
  export { auth };