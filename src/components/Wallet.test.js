import React from 'react';
import { shallow } from 'enzyme';
import Wallet from './Wallet';
import configureStore from 'redux-mock-store';
import * as actionTypes from '../actions/actionTypes'

describe('Wallet', () => {
    const mockStore = configureStore();
    const initialState = 20;
    const store = mockStore(initialState);
    const wallet = shallow(<Wallet store={store}/>).shallow();

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from store', () => {
        expect(wallet.find('.balance').text()).toBe('Wallet balance: 20');
    });

    it('creates an input to deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when the user types into the wallet input', () => {
        const amount = '25';
        
        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', {
                target: {
                    value: amount
                }
            });
        });

        it('updates the local wallet balance in state and converts it to a number', () => {
            expect(wallet.state().amount).toBe(parseInt(amount, 10));
        });

        describe('and the user wants to make a deposit', () => {
            beforeEach(() => {
                store.clearActions();
                wallet.find('.btn-deposit').simulate('click');
            });

            it('dispatches the deposit() it receives from props with local balance', () => {
                expect(store.getActions()[0]).toEqual({ type: actionTypes.DEPOSIT, deposit: parseInt(amount, 10)});
            });
        });

        describe('and the user wants to make a withdrawal', () => {
            beforeEach(() => {
                store.clearActions();
                wallet.find('.btn-withdraw').simulate('click');
            });

            it('dispatches the withdrawal() it receives from props with local balance', () => {
                expect(store.getActions()[0]).toEqual({ type: actionTypes.WITHDRAW, withdrawal: parseInt(amount, 10)});
            });
        });
    });
});