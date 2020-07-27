import React from 'react'
import Header from '../common/header'
import Landing from './landing'
import { loginState } from './../authentication/userAuthentication'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoginState: loginState
        }
        this.setLoginState = this.setLoginState.bind(this)
    }

    render() {
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
