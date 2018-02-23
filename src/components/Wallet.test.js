import React from 'react';
import { shallow } from 'enzyme';
import Wallet from './Wallet';

describe('Wallet', () => {
    const store = {
        getState: () => 20,
        subscribe: () => {},
        dispatch: () => {}
    };
    const wallet = shallow(<Wallet store={store}/>).shallow();

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from store', () => {
        console.log(wallet);
        expect(wallet.find('.balance').text()).toBe('Wallet balance: 20');
    });
});