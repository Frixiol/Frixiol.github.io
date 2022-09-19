import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC9H-aYVwi-cBMBh0yZaclxGElxNWkHWhk",
    authDomain: "frixiolweb.firebaseapp.com",
    projectId: "frixiolweb",
    storageBucket: "frixiolweb.appspot.com",
    messagingSenderId: "846906491680",
    appId: "1:846906491680:web:1f3983f8d105181f500d45",
    measurementId: "G-8X7Q0TPXXN"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}