import balanceReducer from './balance';
import * as actionTypes from '../actions/actionTypes';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;
        expect(balanceReducer(undefined, { type: actionTypes.SET_BALANCE, balance }))
            .toEqual(balance);
    });

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialBalance = 5;
        expect(balanceReducer(initialBalance, { type: actionTypes.DEPOSIT, deposit }))
            .toEqual(15);
    });

    it('withdraws from the balance', () => {
        const withdrawal = 10;
        const initialBalance = 15;
        expect(balanceReducer(initialBalance, { type: actionTypes.WITHDRAW, withdrawal }))
            .toEqual(5);
    });
});

