import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA55Ftf5uS0SqNdweqrCij1ucarXQrLXM0",
  authDomain: "iot-lamp-15dea.firebaseapp.com",
  databaseURL: "https://iot-lamp-15dea-default-rtdb.firebaseio.com",
  projectId: "iot-lamp-15dea",
  storageBucket: "iot-lamp-15dea.appspot.com",
  messagingSenderId: "267857737595",
  appId: "1:267857737595:web:87b17e3e48a533db4befde",
  measurementId: "G-75HXZSZ394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize database
export const db = getDatabase(app)