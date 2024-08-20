
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArPEq3UgwYBdAVD7lhkFNxJTmCKZLOoMo",
  authDomain: "hackathon-demo-7cac2.firebaseapp.com",
  projectId: "hackathon-demo-7cac2",
  storageBucket: "hackathon-demo-7cac2.appspot.com",
  messagingSenderId: "389495360291",
  appId: "1:389495360291:web:c87ff3376975ebb342da96",
  measurementId: "G-8ZZQN17YVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const analytics = getAnalytics(app);
export default db;