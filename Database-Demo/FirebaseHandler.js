// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChtOLjHDMIopWxh_wlBkkNVKjcdBrk1hg",
  authDomain: "hackathon-demo-2f65e.firebaseapp.com",
  projectId: "hackathon-demo-2f65e",
  storageBucket: "hackathon-demo-2f65e.appspot.com",
  messagingSenderId: "1078961883896",
  appId: "1:1078961883896:web:9e8ef89eaec0087df1890d",
  measurementId: "G-G7PMCQC4YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const analytics = getAnalytics(app);
export default db;