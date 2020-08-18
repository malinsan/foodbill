import React from 'react'
import Ingredients from './Ingredients'
import Form from './Form'
import { Container, Grid } from '@material-ui/core'

export default function Dashboard() {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Form />
                </Grid>
                <Grid item xs={12}>
                    <Ingredients />
                </Grid>
            </Grid>
        </Container>
    )
}
