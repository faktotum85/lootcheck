import * as actionTypes from './actionTypes';
import * as actions from './balance';

it('creates an action to set the balance', () => {
    const balance = 0;
    
    const expectedAction = { 
        type: actionTypes.SET_BALANCE, 
        balance 
    };

    expect(actions.setBalance(balance)).toEqual(expectedAction);
});