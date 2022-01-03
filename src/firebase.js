import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaTyD2Jp9aB7ycUbW1z8QyPLmD111rHezHcOw',
  authDomain: 'delete-project-c7021.firebaseapp.com',
  projectId: 'delete-project-c7021',
  storageBucket: 'delete-project-c7021.appspot.com',
  messagingSenderId: '688102987186',
  appId: '1:688102987186:web:e27537ggg7abc2b86b982b',
}

const app = initializeApp(firebaseConfig)

//firestore() is the real time database of firebase
export const db = getFirestore(app)
export const auth = getAuth()
// export const createUser = createUserWithEmailAndPassword()
