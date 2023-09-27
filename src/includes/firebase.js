import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHVJOgTjmisO8fTW6jiM-dBALxq86AflE',
  authDomain: 'music-f55f6.firebaseapp.com',
  projectId: 'music-f55f6',
  storageBucket: 'music-f55f6.appspot.com',
  appId: '1:201326089808:web:0d25c9875172c69862a355'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection
};
