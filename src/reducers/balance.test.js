import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as actionTypes from '../actions/actionTypes';

describe('balanceReducer', () => {
    describe('when initializing', () => {
        const balance = 10;
        it('sets a balance', () => {
            expect(balanceReducer(undefined, { type: actionTypes.SET_BALANCE, balance }))
                .toEqual(balance);
        });

        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
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

