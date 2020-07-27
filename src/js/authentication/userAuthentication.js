import * as firebase from "firebase/app"
import "firebase/auth";

export const LogInStateEnum = {
    LOGIN: "Log out",
    LOGOUT: "Sign up for beta"
}

export let loginState = LogInStateEnum.LOGOUT;
export let user;

export function signIn(setLoginState) {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log("welcome, " + result.user.displayName)
        saveUserData(result.user)
        loginState = LogInStateEnum.LOGIN
        setLoginState()
    }).catch(function (error) {
        console.log("there was an error: " + error.message)
    })
}

export function signOut(updateLoginState) {
    firebase.auth().signOut();
    loginState = LogInStateEnum.LOGOUT
    updateLoginState()
}

export function signInOrOut(callback) {
    if (loginState == LogInStateEnum.LOGOUT) {
        signIn(callback)
    } else {
        signOut(callback)
    }
}

function saveUserData(resultUser) {
    user = resultUser
    console.log(user)
}