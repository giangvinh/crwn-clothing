import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCXqeutFAGddaluLnJjtnX6AzqccoMK6PI',
  authDomain: 'crwn-db-39c38.firebaseapp.com',
  databaseURL: 'https://crwn-db-39c38.firebaseio.com',
  projectId: 'crwn-db-39c38',
  storageBucket: 'crwn-db-39c38.appspot.com',
  messagingSenderId: '995734458237',
  appId: '1:995734458237:web:d8d6b3e462012bff6d8614',
  measurementId: 'G-S1FNGXP94P',
};

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
