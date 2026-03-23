import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNtSSijagAnkow0iqZC1o0A1DMmMc3Pyc",
  authDomain: "laya-voucher.firebaseapp.com",
  projectId: "laya-voucher",
  storageBucket: "laya-voucher.firebasestorage.app",
  messagingSenderId: "460141957899",
  appId: "1:460141957899:web:04bacf33afa42819a8880e",
  measurementId: "G-2V86TGBEZB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Analytics works only in supported environments/contexts
let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (e) {
  console.warn("Analytics not initialized in this environment.", e);
}

export { db, auth, analytics };
