import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getIngredients, deleteIngredient } from '../../actions/ingredients'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core'

class Ingredients extends Component {
    static propTypes = {
        ingredients: PropTypes.array.isRequired,
        getIngredients: PropTypes.func.isRequired,
        deleteIngredient: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getIngredients()
    }

    render() {
        const cellStyle = { fontSize: '2em', color: 'white'  }

        return (
            <TableContainer>
                <Table>
                    <TableHead>
                    <TableRow style={{ backgroundColor: 'black' }}>
                        <TableCell style={cellStyle}>Ingrediens</TableCell>
                        <TableCell style={cellStyle} align="right">Kalorier</TableCell>
                        <TableCell style={cellStyle} align="right"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.ingredients.map(ingredient => (
                        <TableRow style={{ backgroundColor: ingredient.color }} key={ingredient.name}>
                            <TableCell component="th" scope="row">
                                {ingredient.name}
                            </TableCell>
                            <TableCell align="right">44 kcal</TableCell>
                            <TableCell align="right">
                                <Button 
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => this.props.deleteIngredient(ingredient.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

const mapStateToProps = state => ({
    ingredients: state.ingredients.ingredients
})

export default connect(mapStateToProps, { getIngredients, deleteIngredient })(Ingredients)
