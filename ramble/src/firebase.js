import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA69QqdvLdm4L2Ct_fTogUY6NQzVP2QafY",
    authDomain: "ramble-278f9.firebaseapp.com",
    projectId: "ramble-278f9",
    storageBucket: "ramble-278f9.appspot.com",
    messagingSenderId: "582773328350",
    appId: "1:582773328350:web:e428b73c5a33186107f54f",
    measurementId: "G-WBCTEV4QK5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;