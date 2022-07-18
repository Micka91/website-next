import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3qiFjnQDe_gpunb4IORVsSnh4PrBWo1A",
  authDomain: "teamdoc.firebaseapp.com",
  databaseURL: "https://teamdoc.firebaseio.com",
  projectId: "teamdoc",
  storageBucket: "teamdoc.appspot.com",
  messagingSenderId: "850818086257",
  appId: "1:850818086257:web:f61c7f4ab81fc6594632d0",
  measurementId: "G-1C4VG2G0MB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
