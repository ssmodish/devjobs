import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt4UoHAeer3sWWMl7np_XX3arizv9liFs",
  authDomain: "devjobs-3954a.firebaseapp.com",
  projectId: "devjobs-3954a",
  storageBucket: "devjobs-3954a.appspot.com",
  messagingSenderId: "96419045385",
  appId: "1:96419045385:web:c38c92a2ac7325d9a3d8d8",
  measurementId: "G-HY4BRH301F"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore()

export { firestore }