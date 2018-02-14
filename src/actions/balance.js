import * as actionTypes from './actionTypes';

export const setBalance = balance => {
    return {
        type: actionTypes.SET_BALANCE,
        balance
    }
}