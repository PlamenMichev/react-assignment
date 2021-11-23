import firebase from 'firebase/compat/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDAKcwmjZLuubxWUs6eaB5zzNPb04NVdq0",
  authDomain: "react-assignment-5530e.firebaseapp.com",
  projectId: "react-assignment-5530e",
  storageBucket: "react-assignment-5530e.appspot.com",
  messagingSenderId: "601051718810",
  appId: "1:601051718810:web:f46d7be045c86f7e696b23"
}

// Initialize Firebase 
firebase.initializeApp(firebaseConfig)

const auth = getAuth()
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => signInWithPopup(auth, provider)
                                      .then((result) => {
                                        const username = result.user.displayName
                                        const token = result.user.accessToken
                                        return { username, token }
                                      }).catch(() => {
                                        alert("Please try again later!")
                                      });;