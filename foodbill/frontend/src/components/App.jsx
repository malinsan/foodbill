import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import Header from './layout/Header'
import Dashboard from './ingredients/Dashboard'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Provider } from 'react-redux'
import store from '../store'
import { Grid } from '@material-ui/core'
import Layout from './layout/Layout'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))