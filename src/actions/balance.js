import * as actionTypes from './actionTypes';

export const setBalance = balance => {
    return {
        type: actionTypes.SET_BALANCE,
        balance
    }
}

export const deposit = deposit => {
    return {
        type: actionTypes.DEPOSIT,
        deposit
    }
}

export const withdraw = withdrawal => {
    return {
        type: actionTypes.WITHDRAW,
        withdrawal
    }
}