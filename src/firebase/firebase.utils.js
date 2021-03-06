import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDy9TWGYe3GcOtlYVNZiiuRHTkb4WVh9Xs",
  authDomain: "ecommerce-tutorial-crwn-db.firebaseapp.com",
  databaseURL: "https://ecommerce-tutorial-crwn-db.firebaseio.com",
  projectId: "ecommerce-tutorial-crwn-db",
  storageBucket: "ecommerce-tutorial-crwn-db.appspot.com",
  messagingSenderId: "954808978980",
  appId: "1:954808978980:web:1933ef4d4dabdfe06692b1",
  measurementId: "G-6SXYVBE1LB"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
