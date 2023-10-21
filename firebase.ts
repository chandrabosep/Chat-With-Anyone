import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyD4TuwbHM2K5aWhq6toxSKQfJUPcfFmSLc",
    authDomain: "chat-with-anyone-df2ce.firebaseapp.com",
    projectId: "chat-with-anyone-df2ce",
    storageBucket: "chat-with-anyone-df2ce.appspot.com",
    messagingSenderId: "216859584974",
    appId: "1:216859584974:web:ccfc444fbe3c602094a39f"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const functions = getFunctions(app);

  export { auth, db, functions };