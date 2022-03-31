import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAy7nP0j8ACP4e9n-EEd5suKJYMP3TLVEg",
  authDomain: "project-78-26951.firebaseapp.com",
  projectId: "project-78-26951",
  storageBucket: "project-78-26951.appspot.com",
  messagingSenderId: "293391333635",
  appId: "1:293391333635:web:c21653c97dac19d5c91136"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
