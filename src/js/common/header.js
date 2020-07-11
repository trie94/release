import React from 'react'
import './../../scss/home.scss'
import './../../scss/buttons.scss'
import { Link } from "react-router-dom";

// TODO: check if the user is already signed up for beta
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
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
                    <button className='primary' id='signupforbeta'>
                        <Link to='/signup' className='button-color'>
                            Sign up for beta
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Header