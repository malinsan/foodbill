import React, { Component } from 'react'
import { TextField, Grid, withStyles, Button } from '@material-ui/core'

export class Form extends Component {
    state = this.props.initialState

    handleInputChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onClickAction(this.state)
    }

    render() {
        const { classes, textFieldValues, onClickAction } = this.props

        return (
            <form>
                {textFieldValues.map(e => 
                    <TextField 
                        className={classes.textField}
                        label={e.label}
                        value={this.state[e.index]}
                        variant='outlined'
                        name={e.index}
                        key={e.index}
                        onChange={this.handleInputChange.bind(this)}
                    />
                )}
                <Button
                    className={classes.button}
                    variant='contained'
                    color='secondary'
                    size='large'
                    onClick={this.handleSubmit.bind(this)}>
                    Lägg till
                </Button>
            </form>
        )
    }
}