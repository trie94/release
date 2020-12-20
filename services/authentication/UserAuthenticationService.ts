import * as firebase from "firebase/app"
import "firebase/auth"

export enum LoginStateEnum {
    LOGIN, LOGOUT
}

class UserAuthenticationService {
    public userData: firebase.User = null
    public loginState: LoginStateEnum = LoginStateEnum.LOGOUT

    signIn(setLoginState) {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then((result) => {
            console.log("welcome, " + result.user.displayName)
            this.saveUserData(result.user)
            this.loginState = LoginStateEnum.LOGIN
            setLoginState()
        }).catch((error) => {
            console.log("there was an error: " + error.message)
        })
    }

    signOut(updateLoginState) {
        firebase.auth().signOut();
        console.log("signed out")
        this.loginState = LoginStateEnum.LOGOUT
        updateLoginState()
    }

    toggleState(callback) {
        if (this.loginState == LoginStateEnum.LOGOUT) {
            this.signIn(callback)
        } else {
            this.signOut(callback)
        }
    }

    saveUserData(resultUser: any) {
        this.userData = resultUser
    }
}

export const userAuthenticationService = new UserAuthenticationService()
export default userAuthenticationService
