import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBkpZDyeTCdowf05K67KWL_I0xJUB-tNyM",
  authDomain: "slack-clone-f3c4a.firebaseapp.com",
  databaseURL: "https://slack-clone-f3c4a.firebaseio.com",
  projectId: "slack-clone-f3c4a",
  storageBucket: "slack-clone-f3c4a.appspot.com",
  messagingSenderId: "747003908425",
  appId: "1:747003908425:web:f8a4b450b7d0245c04ca98",
  measurementId: "G-TS9E9LJB7E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.auth();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
