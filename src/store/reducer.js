import { CHANGE_INPUT, ADD_ITEM_LIST, DELETE_ITEM_LIST } from './actionTypes'

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
    if (action.type === ADD_ITEM_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === DELETE_ITEM_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}