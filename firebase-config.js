import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBngK4VkmEmSY76bIJL8PQQ7-6wnndOT_g",
  authDomain: "matplay-1aad2.firebaseapp.com",
  projectId: "matplay-1aad2",
  storageBucket: "matplay-1aad2.firebasestorage.app",
  messagingSenderId: "253131715399",
  appId: "1:253131715399:web:82f94c9873f8d47427d262",
  measurementId: "G-MYBHHGG02C"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
