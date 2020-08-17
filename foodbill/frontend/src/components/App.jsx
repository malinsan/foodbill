import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import Header from './layout/Header'
import Dashboard from './ingredients/Dashboard'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}> 
                <>
                    <CssBaseline />
                    <Header />
                    <Dashboard />
                </>
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))