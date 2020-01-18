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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
