import * as types from '../actions/type-actions.js';
import { appState as initialState } from './initialState.js';

const reducers = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
        case types.TEST_MSG:
            return Object.assign({ ...state }, { msg: action.state });
        case types.GET_DEVICE:
            return Object.assign({ ...state }, { devices: action.state });
        default:
            return state;
    }
}

export default reducers;