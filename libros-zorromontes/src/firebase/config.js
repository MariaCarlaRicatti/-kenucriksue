
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxfVHijNiF1hUiqoQzkW5AMdB0K3rEtGY",
  authDomain: "zorro-montes-libros.firebaseapp.com",
  projectId: "zorro-montes-libros",
  storageBucket: "zorro-montes-libros.appspot.com",
  messagingSenderId: "451923859898",
  appId: "1:451923859898:web:769088b6760a5f2390a583"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);