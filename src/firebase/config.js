import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAykrm3jrBNaavE0lj1AcStUKyjtbl5Xcc",
  authDomain: "photo-gallery-ec2ac.firebaseapp.com",
  projectId: "photo-gallery-ec2ac",
  storageBucket: "photo-gallery-ec2ac.appspot.com",
  messagingSenderId: "809852870142",
  appId: "1:809852870142:web:0ffa2cb7848ab38ac934af"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };