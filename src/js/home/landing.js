import React from 'react'
import landingImage from './../../img/landing.png'
import './../../scss/images.scss'

class Landing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='landing-row'>
                <div className='landing'>
                    <div className='landing-title'>Reach global readers.</div>
                    <div className='landing-description'>Create a multi-lingual portfolio and share what languages and platforms your work is available in.</div>
                    <button className='primary landing-button'>Sign up for beta</button>
                </div>
                <img className='landing-img' src={landingImage}></img>
            </div>
        )
    }
}

export default Landing