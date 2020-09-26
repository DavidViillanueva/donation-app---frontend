import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAC18pebP-0nI8gaCfwbTI5YiDK5wN3Rjc",
  authDomain: "hola-32d1e.firebaseapp.com",
  databaseURL: "https://hola-32d1e.firebaseio.com",
  projectId: "hola-32d1e",
  storageBucket: "hola-32d1e.appspot.com",
  messagingSenderId: "62034121614",
  appId: "1:62034121614:web:3e7c8ce54a91172c838adf"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB;