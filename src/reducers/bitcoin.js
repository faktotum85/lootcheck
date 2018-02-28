import * as actionTypes from '../actions/actionTypes';

const bitcoin = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.FETCH_BITCOIN:
            return action.bitcoin;
        default: 
            return state;
    }
}

export default bitcoin;