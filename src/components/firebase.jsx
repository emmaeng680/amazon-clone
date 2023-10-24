import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// signInWithPopup

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoTC2lq8z4OPlfjofChJ8w15oDYlcsn9Y",
  authDomain: "challenge-56240.firebaseapp.com",
  projectId: "challenge-56240",
  storageBucket: "challenge-56240.appspot.com",
  messagingSenderId: "154789337033",
  appId: "1:154789337033:web:8964a1fc34ad7b630d3a18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);




export { auth , db };
