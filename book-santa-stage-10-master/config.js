import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAM3Iq2QrXQsCtuk_njwZ_GHoVBCMVgdI0",
  authDomain: "book-santa-new-cb80f.firebaseapp.com",
  projectId: "book-santa-new-cb80f",
  storageBucket: "book-santa-new-cb80f.appspot.com",
  messagingSenderId: "548382824058",
  appId: "1:548382824058:web:0cbd42b9d2241579ce8dc3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
