import React from 'react'
import Header from '../../js/common/header'
import Landing from './landing'
import { loginState } from '../../js/authentication/userAuthentication'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoginState: loginState
        }
        this.setLoginState = this.setLoginState.bind(this)
    }

    render() {
        console.log("worktree test")
        return (
            <div>
                <Header title="Release" userLoginState={this.state.userLoginState} loginCallback={this.setLoginState} />
                <Landing userLoginState={this.state.userLoginState} loginCallback={this.setLoginState} />
            </div>
        )
    }

    setLoginState() {
        this.setState({ userLoginState: loginState })
    }
}