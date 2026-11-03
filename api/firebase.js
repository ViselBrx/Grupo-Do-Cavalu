import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBO98GSu3WpIF_61HsrVOOsKOStdT7q6Hs",
  authDomain: "grupo-do-cavalu.firebaseapp.com",
  projectId: "grupo-do-cavalu",
  storageBucket: "grupo-do-cavalu.firebasestorage.app",
  messagingSenderId: "58736819378",
  appId: "1:58736819378:web:31a96b305e1b2ebcdb5dab",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function salvarResposta(resposta) {
  return addDoc(collection(db, "respostasQuestionario"), {
    ...resposta,
    criadoEm: serverTimestamp(),
  });
}
