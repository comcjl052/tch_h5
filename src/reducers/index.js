import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import common from './common.js';

export default (history) => combineReducers({
    router: connectRouter(history),
    common
});