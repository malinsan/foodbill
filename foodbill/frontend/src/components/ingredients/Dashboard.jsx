import React from 'react'
import Ingredients from './Ingredients'
import AddIngredientForm from './AddIngredientForm'
import { Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => {
    content: {
        flexGrow: 1
    }
})

export default function Dashboard() {
    const classes = useStyles()

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <AddIngredientForm />
                </Grid>
                <Grid item xs={12}>
                    <Ingredients />
                </Grid>
            </Grid>
        </>
    )
}
