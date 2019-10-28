import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDy9TWGYe3GcOtlYVNZiiuRHTkb4WVh9Xs",
  authDomain: "ecommerce-tutorial-crwn-db.firebaseapp.com",
  databaseURL: "https://ecommerce-tutorial-crwn-db.firebaseio.com",
  projectId: "ecommerce-tutorial-crwn-db",
  storageBucket: "",
  messagingSenderId: "954808978980",
  appId: "1:954808978980:web:4535c93120daece86692b1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
