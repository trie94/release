import React from 'react'
import '../../scss/home.scss'
import '../../scss/buttons.scss'
import { Link } from "react-router-dom"
import userAuthenticationService, { LoginStateEnum } from '../../services/authentication/UserAuthenticationService'

type HeaderProps = {
    title: string
}

type HeaderState = {
    loginState: LoginStateEnum
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
    state = { loginState: userAuthenticationService.loginState }

    constructor(props) {
        super(props)

        this.setLoginState = this.setLoginState.bind(this)
        this.getText = this.getText.bind(this)
    }

    render() {
        return (
            <div className='header row'>
                <div className='title-text'>
                    <Link to='/' className='main-text-color'>
                        {this.props.title}
                    </Link>
                </div>
                <div className='header-right'>
                    <button className='translate'>한/A</button>
                    <button onClick={() => userAuthenticationService.toggleState(this.setLoginState)} className='primary' id='signupforbeta'>{this.getText(this.state.loginState)}</button>
                </div>
            </div>
        )
    }

    private setLoginState() {
        this.setState({ loginState: userAuthenticationService.loginState })
    }

    private getText(loginState: LoginStateEnum): string {
        return loginState == LoginStateEnum.LOGIN ? "Sign Out" : "Sign In"
    }
}
