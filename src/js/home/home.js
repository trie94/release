import React from 'react'
import Header from '../common/header'
import Landing from './landing'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header title="Release" />
                <Landing />
            </div>
        )
    }
}

export default Home
