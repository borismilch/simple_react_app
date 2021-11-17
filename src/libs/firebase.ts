import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_g_H28OIH-almriozr70h_aJEGBLwO2Y",
  authDomain: "any-food-99449.firebaseapp.com",
  projectId: "any-food-99449",
  storageBucket: "any-food-99449.appspot.com",
  messagingSenderId: "245300722261",
  appId: "1:245300722261:web:5076c1da3a4880872c32dc"
};

const app = initializeApp(firebaseConfig);

export const App = app

export const auth = getAuth()

export const db = getFirestore()