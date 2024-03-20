import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVSHOFaloqdoCOHM0T7gQQ6IntJogrZYg",
  authDomain: "cyber-radar.firebaseapp.com",
  projectId: "cyber-radar",
  storageBucket: "cyber-radar.appspot.com",
  messagingSenderId: "182376873750",
  appId: "1:182376873750:web:5ff6b65c40ba3f0aef5a37",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
