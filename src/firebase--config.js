import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
// import {getFireStore} from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAHE6skctGhIpD_5rm1eL6nc9VcUUpLmDc",
    authDomain: "notesapp-ebbf1.firebaseapp.com",
    projectId: "notesapp-ebbf1",
    storageBucket: "notesapp-ebbf1.appspot.com",
    messagingSenderId: "205826637155",
    appId: "1:205826637155:web:fc3efc6f257eb3d04c6756",
    measurementId: "G-GC5C2MECRX"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app)