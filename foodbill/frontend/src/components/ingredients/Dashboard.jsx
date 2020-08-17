import React from 'react'
import Ingredients from './Ingredients'
import Form from './Form'
import { Container } from '@material-ui/core'

export default function Dashboard() {
    return (
        <Container>
            <Form />
          <Ingredients />  
        </Container>
    )
}
