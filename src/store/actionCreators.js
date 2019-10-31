import { CHANGE_INPUT } from './actionTypes'

export const changeInput = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}