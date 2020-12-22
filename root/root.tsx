import '../services/firebase/firebaseSetup'
import '../scss/style.scss'
import Home from '../pages/home'
import Mypage from '../pages/mypage'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../views/common/header'

if (process.env.NODE_ENV !== 'production') { console.log("dev mode") }

if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => {
        const oldRootElem = document.querySelector('body')
        const newRootElem = oldRootElem?.cloneNode(false)
        if (newRootElem != null) {
            oldRootElem?.parentNode?.insertBefore(newRootElem, oldRootElem)
            oldRootElem?.parentNode?.removeChild(oldRootElem)
        }
    })
}

class Root extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }

    render() {
        window.scrollTo(0, 0)
        return (
            <div>
                <Header title="Release" />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/mypage' component={Mypage} />
                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    document.getElementById('root')
)