
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDyiCS_j7Podc_Ut3PbKjohFOZxZ7g4b_E",
  authDomain: "petshop-16023.firebaseapp.com",
  projectId: "petshop-16023",
  storageBucket: "petshop-16023.appspot.com",
  messagingSenderId: "716471862028",
  appId: "1:716471862028:web:47c27f02cab2a6ba4f7f29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  //to connect auth in to firebase
export const auth =getAuth(app) 

export default app