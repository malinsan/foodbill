import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'

class App extends Component {
    render() {
        return <Button variant="contained" color="primary">REACT APP</Button>
    }
}


ReactDOM.render(<App />, document.getElementById('app'))