import React, { Component } from 'react'
import { TextField, Grid, withStyles, Button, makeStyles } from '@material-ui/core'
import { Form } from '../general/Form'
import { useDispatch, connect } from 'react-redux'
import { addIngredient } from '../../actions/ingredients'

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    button: {
        width: '25ch',
    }
}))

function _AddIngredientForm(props) {
    const classes = useStyles()

    const initialState = {
        name: '',
        color: ''
    }

    const ingredientValues = [
        { label: 'Namn', index: 'name' },
        { label: 'Färg', index: 'color' }
    ]

    return (
        <Form 
            classes={classes}
            initialState={initialState}
            textFieldValues={ingredientValues}
            onClickAction={props.addIngredient}
        />
    )
}

export default connect(null, { addIngredient })(_AddIngredientForm)