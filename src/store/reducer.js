import { CHANGE_INPUT } from './actionTypes'

const defaultState = {
    inputValue:'huanghui',
    list:[]
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}