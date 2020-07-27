import React from 'react'
import landingImage from './../../img/landing.png'
import './../../scss/images.scss'
import { signInOrOut } from './../authentication/userAuthentication'

export default class Landing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='landing-row'>
                <div className='landing'>
                    <div className='landing-title'>Reach global readers.</div>
                    <div className='landing-description'>Create a multi-lingual portfolio and share what languages and platforms your work is available in.</div>
                    <button onClick={() => signInOrOut(this.props.loginCallback)} className='primary landing-button'>{this.props.userLoginState}</button>
                </div>
                <img className='landing-img' src={landingImage}></img>
            </div>
        )
    }
}
