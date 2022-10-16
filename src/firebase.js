import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDpcGtyMnXKEq6ggrKo5jeZ5e_fHju5qFo",
  authDomain: "store-ae673.firebaseapp.com",
  projectId: "store-ae673",
  storageBucket: "store-ae673.appspot.com",
  messagingSenderId: "831177363843",
  appId: "1:831177363843:web:e7d97a9d21cc4f6efda6b6"
  }).auth();