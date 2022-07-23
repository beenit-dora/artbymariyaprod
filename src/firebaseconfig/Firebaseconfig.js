// Import the functions you need from the SDKs you
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBk5t4doJudruiu3vueArhLQtXKbRvo1uc",
  authDomain: "artbymariya-f0b48.firebaseapp.com",
  projectId: "artbymariya-f0b48",
  storageBucket: "artbymariya-f0b48.appspot.com",
  messagingSenderId: "888353593940",
  appId: "1:888353593940:web:a8e6cc152c257f0802ebc1",
  measurementId: "G-S4T2S3J9PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
