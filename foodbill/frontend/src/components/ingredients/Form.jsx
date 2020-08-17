import React, { Component } from 'react'

export class Form extends Component {
    state = {
        name: '',
        color: ''
    }

    render() {
        return (
            <div>
                <h1>Add ingredient</h1>
            </div>
        )
    }
}

export default Form
