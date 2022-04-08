// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeqZmGMuB_SvfAkdi8WZ2KCeUGtEqSPkw",
  authDomain: "ecom-cc13a.firebaseapp.com",
  projectId: "ecom-cc13a",
  storageBucket: "ecom-cc13a.appspot.com",
  messagingSenderId: "122661233044",
  appId: "1:122661233044:web:595fbcb91bdd4f89d1af81",
  measurementId: "G-HTVKL4JC3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;