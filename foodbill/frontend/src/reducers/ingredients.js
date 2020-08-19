import { GET_INGREDIENTS, DELETE_INGREDIENT } from '../actions/types.js'

const initialState = {
    ingredients: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_INGREDIENTS:
            console.log('hej!')
            return {
                ...state,
                ingredients: action.payload
            }
        case DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient.id !== action.payload)
            }
        default:
            return state
    }
}
