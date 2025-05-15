import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAT6JAKjIIxM3qPLnnLuSvmoNtadhmupPU",
  authDomain: "creative-training.firebaseapp.com",
  databaseURL: "https://creative-training-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "creative-training",
  storageBucket: "creative-training.appspot.com",
  messagingSenderId: "233637813296",
  appId: "1:233637813296:web:6fed062f79d2760e0ba1f5"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);