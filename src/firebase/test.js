import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('UxsTk1iRYALknX7lE0fo')
  .collection('cartItems')
  .doc('sPzalEHD5daqIvtSv4pP');

firestore.doc('/users/UxsTk1iRYALknX7lE0fo/cartItems/sPzalEHD5daqIvtSv4pP');
firestore.collection('/users/UxsTk1iRYALknX7lE0fo/cartItems');
