import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCAt7HwHW25tipttorthDXDeAMlay8DnV0",
	authDomain: "cogito-5ed0d.firebaseapp.com",
	projectId: "cogito-5ed0d",
	storageBucket: "cogito-5ed0d.appspot.com",
	messagingSenderId: "165375023451",
	appId: "1:165375023451:web:d0ccf0160acc183d9be27e",
};

// Initialize Firebase
// this is the singleton pattern
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
