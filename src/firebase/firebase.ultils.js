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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;