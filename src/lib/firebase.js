import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey:  process.env.REACT_APP_apiKey,
  authDomain: "reactchat-8048d.firebaseapp.com",
  projectId: "reactchat-8048d",
  storageBucket: "reactchat-8048d.appspot.com",
  messagingSenderId: "66020099188",
  appId: "1:66020099188:web:2247e2c2bb6c1ada4dbd21"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storate = getStorage(app);
