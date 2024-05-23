import firebase from 'firebase/compat/app'; // Adjusted import statement
import 'firebase/compat/database'; 


const firebaseConfig = {
  apiKey: "AIzaSyCgxzHNxiogXpuCmOZtXsk8wuENVUn9FlQ",
  authDomain: "crudfire-42a69.firebaseapp.com",
  databaseURL: "https://crudfire-42a69-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crudfire-42a69",
  storageBucket: "crudfire-42a69.appspot.com",
  messagingSenderId: "1086113248195",
  appId: "1:1086113248195:web:57a38caac8d65819614376"
};

firebase.initializeApp(firebaseConfig);


export default firebase;