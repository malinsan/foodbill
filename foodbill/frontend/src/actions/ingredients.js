import axios from 'axios'

import { GET_INGREDIENTS, DELETE_INGREDIENT, ADD_INGREDIENT } from './types'

// GET INGREDIENTS
export const getIngredients = () => dispatch => {
    axios.get('api/ingredients')
        .then(res => {
            dispatch({
                type: GET_INGREDIENTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

// DELETE INGREDIENT
export const deleteIngredient = id => dispatch => {
    axios
        .delete(`api/ingredients/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_INGREDIENT,
                payload: id
            })
        })
        .catch(err => console.log(err))
}

// ADD INGREDIENT
export const addIngredient = ingredient => dispatch => {
    axios
        .post('api/ingredients/', ingredient)
        .then(res => {
            dispatch({
                type: ADD_INGREDIENT,
                payload: res.data
            })
        })
} 