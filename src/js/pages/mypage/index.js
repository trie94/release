import React from 'react'
import Header from './../../common/header'
import { loginState } from '../../authentication/userAuthentication'

export default class Mypage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoginState: loginState
        }
        this.setLoginState = this.setLoginState.bind(this)
    }

    render() {
        console.log("my page")
        return (
            <div>
                <Header title="Release" userLoginState={this.state.userLoginState} loginCallback={this.setLoginState} />
                <div>this is my page</div>
            </div>
        )
    }

    setLoginState() {
        this.setState({ userLoginState: loginState })
    }
}
