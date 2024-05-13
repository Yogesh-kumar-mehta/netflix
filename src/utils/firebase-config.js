import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmHCUOytX7akKRsL-kmzHBghlwKbywMQI",
  authDomain: "netflix-clone-react-9483d.firebaseapp.com",
  projectId: "netflix-clone-react-9483d",
  storageBucket: "netflix-clone-react-9483d.appspot.com",
  messagingSenderId: "16839957740",
  appId: "1:16839957740:web:e091f5172eac85d88a19c9",
  measurementId: "G-W2TJDX9R29"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
