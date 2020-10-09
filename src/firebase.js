import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAekd5geWjouPqLU9ukIAj3MmekEQayzkQ",
  authDomain: "clone-51525.firebaseapp.com",
  databaseURL: "https://clone-51525.firebaseio.com",
  projectId: "clone-51525",
  storageBucket: "clone-51525.appspot.com",
  messagingSenderId: "61622444527",
  appId: "1:61622444527:web:656edfebe0457f88fb161a",
  measurementId: "G-J0T5N6F4GK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
