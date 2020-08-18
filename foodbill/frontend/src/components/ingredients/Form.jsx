import React, { Component } from 'react'
import { TextField, Grid } from '@material-ui/core'

export class Form extends Component {
    state = {
        name: '',
        color: ''
    }

    render() {
        return (
            <form>
                <TextField label='Namn' variant='outlined'></TextField>
            </form>
        )
    }
}

export default Form
