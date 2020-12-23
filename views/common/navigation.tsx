import * as React from 'react'
import '../../scss/buttons.scss'
import './../common/style.scss'
import { Link } from "react-router-dom"
import userAuthenticationService, { LoginStateEnum } from '../../services/authentication/UserAuthenticationService'
import MenuItem from './menuitem'

export enum MenuEnum {
    HOME = "/", SEARCH = "/search", PROFILE = "/mypage"
}

type NavProps = {
    title: string
}

type NavState = {
    loginState: LoginStateEnum,
    menuState: MenuEnum
}

export default class Navigation extends React.Component<NavProps, NavState> {
    state = {
        loginState: userAuthenticationService.loginState,
        menuState: window.location.pathname as MenuEnum
    }

    constructor(props: NavProps) {
        super(props)
        this.setLoginState = this.setLoginState.bind(this)
        this.setMenuState = this.setMenuState.bind(this)
        this.getText = this.getText.bind(this)
    }

    render() {
        return (
            <div className="left-side-bar">
                <div className="navigation">
                    <div className="logo">
                        <Link to='/'>
                            {this.props.title}
                        </Link>
                    </div>
                    <MenuItem text="Home" linkTo="/" menuEnum={MenuEnum.HOME} currentMenu={this.state.menuState} onClickCallback={(menu) => this.setMenuState(menu)} />
                    <MenuItem text="Search" linkTo="/" menuEnum={MenuEnum.SEARCH} currentMenu={this.state.menuState} onClickCallback={(menu) => this.setMenuState(menu)} />
                    <MenuItem text="Profile" linkTo="/mypage" menuEnum={MenuEnum.PROFILE} currentMenu={this.state.menuState} onClickCallback={(menu) => this.setMenuState(menu)} />
                </div>
                {/* <button onClick={() => userAuthenticationService.toggleState(this.setLoginState)} className='primary' id='signupforbeta'>{this.getText(this.state.loginState)}</button> */}
            </div>
        )
    }

    private setLoginState() {
        this.setState({ loginState: userAuthenticationService.loginState })
    }

    private setMenuState(selected: MenuEnum) {
        this.setState({ menuState: selected })
    }

    private getText(loginState: LoginStateEnum): string {
        return loginState == LoginStateEnum.LOGIN ? "Sign Out" : "Sign In"
    }
}
