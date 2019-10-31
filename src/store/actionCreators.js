import { CHANGE_INPUT, ADD_ITEM_LIST, DELETE_ITEM_LIST } from './actionTypes'

export const changeInput = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}

export const addItemList = () => {
    return {
        type: ADD_ITEM_LIST
    }
}

export const deleteItemList = (index) => {
    return {
        type: DELETE_ITEM_LIST,
        index
    }
}