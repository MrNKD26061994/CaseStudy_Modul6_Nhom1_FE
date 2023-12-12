import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage' ;

const firebaseConfig = {
    apiKey: "AIzaSyAbPyi0OW5gOFiGgqTaLCO-gd8J45ZwqWc",
    authDomain: "md6img.firebaseapp.com",
    projectId: "md6img",
    storageBucket: "md6img.appspot.com",
    messagingSenderId: "509606485824",
    appId: "1:509606485824:web:874742c7d98b5a2f70a4a5",
    measurementId: "G-XN9CSL08CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);