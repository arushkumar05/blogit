import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBzmDRg5gxxgl0zLOeTbGHY-fQ-UGC9aEo",
  authDomain: "blogit-9be6f.firebaseapp.com",
  projectId: "blogit-9be6f",
  storageBucket: "blogit-9be6f.appspot.com",
  messagingSenderId: "19881877606",
  appId: "1:19881877606:web:d2edeb59a1f5ffdc970da7"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp }
