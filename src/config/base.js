import firebase from 'firebase'
import Rebase from 're-base'

const config = {
   apiKey: "AIzaSyDzCRFnBEvLu2PdczU5MA1fDqePGM-dNdg",
   authDomain: "blog2-faf6a.firebaseapp.com",
   databaseURL: "https://blog2-faf6a.firebaseio.com",
   projectId: "blog2-faf6a",
   storageBucket: "blog2-faf6a.appspot.com",
   messagingSenderId: "646776035117"
}

export const app = firebase.initializeApp(config)
export const gmailProvider = new firebase.auth.GoogleAuthProvider()
export const facebookPorvider = new firebase.auth.FacebookAuthProvider()
export const base = Rebase.createClass(app.database())