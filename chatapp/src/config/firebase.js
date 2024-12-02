import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvUBc-nk2dY6BsBBHDMQSDWgX3kwRZuqc",
  authDomain: "chatapp-f0a04.firebaseapp.com",
  projectId: "chatapp-f0a04",
  storageBucket: "chatapp-f0a04.firebasestorage.app",
  messagingSenderId: "998653350882",
  appId: "1:998653350882:web:f32c32dfbacf112e4a1fbb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
