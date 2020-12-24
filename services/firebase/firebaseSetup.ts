import * as firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBWVBtAk_PwNTUQk3gHfGewH2b6qBaiNZw",
    authDomain: "release-b0fef.firebaseapp.com",
    databaseURL: "https://release-b0fef.firebaseio.com/",
    projectId: "release-b0fef",
    storageBucket: "release-b0fef.appspot.com",
    messagingSenderId: "186071741213",
    appId: "1:186071741213:web:883754913a7ddae0a267f4",
    measurementId: "G-ST6QR9QHCE"
}

firebase.initializeApp(firebaseConfig)
console.log("init firebase")

export const storageRef = firebase.storage().ref()

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }