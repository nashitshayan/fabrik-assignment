// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAYfbEkGzfa5pw1fyzH5-rZ2H49ltuFPi0',
	authDomain: 'd-models-32d7e.firebaseapp.com',
	projectId: 'd-models-32d7e',
	storageBucket: 'd-models-32d7e.appspot.com',
	messagingSenderId: '154901238794',
	appId: '1:154901238794:web:c646932a8cd298500dbbf3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
