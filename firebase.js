import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


 
const firebaseConfig = {
    apiKey: "AIzaSyAmtQDqrW_KNsQSJRr_2kSznMRIGW2yp6o",
    authDomain: "inventory-management-d895d.firebaseapp.com", 
    projectId: "inventory-management-d895d",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "1:665707109677:web:4b84ec6a7d087b9ff587a4",
    measurementId: "G-MXJ19M3WRZ"
   
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };