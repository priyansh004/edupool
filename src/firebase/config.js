// Import the functions you need from the SDKs you need
import { initializeApp ,} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCglSPYdsEdflg-rnFYofgE0ET9GzyuqTg",
  authDomain: "edupool.firebaseapp.com",
  projectId: "edupool",
  databaseURL:"https://edupool-default-rtdb.firebaseio.com/",
  storageBucket: "edupool.appspot.com",
  messagingSenderId: "988137615664",
  appId: "1:988137615664:web:44b6b6ef81d4bd453298f5",
  measurementId: "G-4NP2FG5THB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
