import * as actionTypes from '../actions/actionTypes';

const balanceReducer = (state = 0, action) => {
    switch(action.type) {
        case actionTypes.SET_BALANCE: 
            return action.balance;
        case actionTypes.DEPOSIT:
            return state + action.deposit;
        case actionTypes.WITHDRAW:
            return state - action.withdrawal;
        default:
            return state;
    }
};

export default balanceReducer;
