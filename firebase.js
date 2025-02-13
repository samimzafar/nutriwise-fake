// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBn6dtQuTtEd1Z069ho6tWMDvYQQwI55sc',
  authDomain: 'nutriwise-448b6.firebaseapp.com',
  projectId: 'nutriwise-448b6',
  storageBucket: 'nutriwise-448b6.appspot.com',
  messagingSenderId: '839355874468',
  appId: '1:839355874468:web:9e76bf1a23ec63205eba31',
  measurementId: 'G-SNYC0STXGJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
