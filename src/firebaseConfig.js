
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIK,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROJECT,
  storageBucket: import.meta.env.VITE_STO,
  messagingSenderId: import.meta.env.VITE_MS,
  appId: import.meta.env.VITE_APP
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore( app )