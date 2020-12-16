import '../scss/style.scss'
import Home from '../pages/home'
import Mypage from '../pages/mypage'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import '../js/firebase/firebaseSetup'

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
        this.state = {}
    }

    render() {
        window.scrollTo(0, 0)
        console.log("fuck you")
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/mypage' component={Mypage} />
                <Redirect to='/' />
            </Switch>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    document.getElementById('root')
)