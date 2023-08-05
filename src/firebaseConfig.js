// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDcsrMIv69fsibP2HoA6PnGao0xRwYo13I",
	authDomain: "ecommerce-macauy.firebaseapp.com",
	projectId: "ecommerce-macauy",
	storageBucket: "ecommerce-macauy.appspot.com",
	messagingSenderId: "728195671985",
	appId: "1:728195671985:web:6020fe5d15dafaf56fff90",
};

// const firebaseConfig = {
// 	apiKey: import.meta.env.VITE_API_KEY,
// 	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
// 	projectId: import.meta.env.VITE_PROJECT_ID,
// 	storageBucket: import.meta.env.VITE_STORAGE,
// 	messagingSenderId: import.meta.env.VITE_MESSAGING,
// 	appId: import.meta.env.VITE_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
