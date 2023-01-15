import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNwdJ4zTWlC7PwqpI2-03VOCMui7sCOo8",
  authDomain: "movix-ea14f.firebaseapp.com",
  projectId: "movix-ea14f",
  storageBucket: "movix-ea14f.appspot.com",
  messagingSenderId: "399207117966",
  appId: "1:399207117966:web:f8c44e046e5af6b09c85df",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
