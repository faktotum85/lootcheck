import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
    state = {amount: undefined}

    updateAmount = event => {
        const amount = parseInt(event.target.value, 10);
        this.setState({amount});
    }

    deposit = () => {
        this.props.deposit(this.state.amount);
    }

    withdraw = () => {
        this.props.withdraw(this.state.amount);
    }

    render() {
        return (
            <div>
                <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
                <br />
                <input type="text" className="input-wallet" onChange={this.updateAmount}/>
                <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
                <button className="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        balance: state.balance
    };
}

const mapDispatchToProps = dispatch => {
    return {
        deposit: amount => dispatch(deposit(amount)),
        withdraw: amount => dispatch(withdraw(amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);