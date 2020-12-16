import React from 'react'
import '../../scss/home.scss'
import '../../scss/buttons.scss'
import { Link } from "react-router-dom"
import { signInOrOut } from '../authentication/userAuthentication'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
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
                    <button onClick={() => signInOrOut(this.props.loginCallback)} className='primary' id='signupforbeta'>{this.props.userLoginState}</button>
                </div>
            </div>
        )
    }
}
