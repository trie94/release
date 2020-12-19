import '../scss/style.scss'
import Home from '../pages/home'
import Mypage from '../pages/mypage'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import '../services/firebase/firebaseSetup'
import { loginState } from '../services/authentication/userAuthentication'
import Header from '../views/common/header'

if (process.env.NODE_ENV !== 'production') { console.log("dev mode") }

if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => {
        const oldRootElem = document.querySelector('body')
        const newRootElem = oldRootElem.cloneNode(false)
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem)
        oldRootElem.parentNode.removeChild(oldRootElem)
    })
} else {
    enableProdMode()
}

class Root extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoginState: loginState
        }
        this.setLoginState = this.setLoginState.bind(this)
    }

    render() {
        window.scrollTo(0, 0)
        return (
            <div>
                <Header title="Release" userLoginState={this.state.userLoginState} loginCallback={this.setLoginState} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/mypage' component={Mypage} />
                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }

    setLoginState() {
        this.setState({ userLoginState: loginState })
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    document.getElementById('root')
)