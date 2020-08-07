import * as types from './type-actions.js';

//post 
const testMsg = function (state) {
    return {
        type: types.TEST_MSG,
        msg: state
    }
}

const getDevice = function (state) {
    return {
        type: types.GET_DEVICE,
        state
    }
}

export {
    testMsg,
    getDevice
};