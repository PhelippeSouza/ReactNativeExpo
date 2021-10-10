// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO82Is6Pl_migtWlg_bhhtqlp1mSJXmwE",
  authDomain: "authapp-22815.firebaseapp.com",
  projectId: "authapp-22815",
  storageBucket: "authapp-22815.appspot.com",
  messagingSenderId: "413323778699",
  appId: "1:413323778699:web:40c6e72f3496f0e91d928e"
};

let app 
if(firebase.apps.length === 0 ){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const auth = firebase.auth()

export {auth}