import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbGj-FKhOd7fY4UIbSWrsm5ly0SbQBXAM",
  authDomain: "linkedin-clone-ee75a.firebaseapp.com",
  projectId: "linkedin-clone-ee75a",
  storageBucket: "linkedin-clone-ee75a.appspot.com",
  messagingSenderId: "452369634159",
  appId: "1:452369634159:web:ef0dd83d49995f42670e9a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
