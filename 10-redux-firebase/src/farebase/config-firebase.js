import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCUyfxHsgqhl661myue-muwIWTAcmn_oPo",
	authDomain: "crud-react-586d4.firebaseapp.com",
	projectId: "crud-react-586d4",
	storageBucket: "crud-react-586d4.appspot.com",
	messagingSenderId: "787220596220",
	appId: "1:787220596220:web:8cfa38d3ff9bc8be365e79",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
