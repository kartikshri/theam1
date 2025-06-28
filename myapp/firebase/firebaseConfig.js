// firebase/firebaseConfig.js

// Use compat version
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAiuxyO5hCX_pnLjRQ4qy1BxB8XjPgZtbY",
  authDomain: "theme-app-b799e.firebaseapp.com",
  projectId: "theme-app-b799e",
  storageBucket: "theme-app-b799e.appspot.com",
  messagingSenderId: "430933244757",
  appId: "1:430933244757:web:c2f7e1bf04bfb3e1f5cddc"
};

// Initialize app (only once)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };
