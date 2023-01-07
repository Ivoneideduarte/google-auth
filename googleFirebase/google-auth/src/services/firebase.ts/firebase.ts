
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDLblUl3Uxg2To-5bfsx_SSjLloF75g_po",
  authDomain: "auth-87872.firebaseapp.com",
  projectId: "auth-87872",
  storageBucket: "auth-87872.appspot.com",
  messagingSenderId: "104490422891",
  appId: "1:104490422891:web:0a24f542c475c877f2d72e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)