import { compose, createStore, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducers from '../reducers';
import { connect } from 'react-redux';
const history = createHashHistory();

// logger
const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);

    const result = next(action);

    console.log('nex state', store.getState());
    console.groupEnd(action.type);

    return result;
}

// crash reporter
const crashReporter = store => next => action => {
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception!', err);

        throw err;
    }
}

// { meta: { delay: N } } for action delay few ms

const timeoutScheduler = store => next => action => {
    if (!action.meta || !action.meta.delay) {
        return next(action);
    }
    const timeoutId = setTimeout(() => next(action), action.meta.delay);
    return function cancel() {
        clearTimeout(timeoutId);
    }
}

// { meta: { raf: true } }
const rafScheduler = store => next => {
    const queueActions = [];
    let frame = null;

    function loop() {
        frame = null;

        try {
            if (queueActions.length) next(queueActions.shift());
        } finally {
            maybeRaf();
        }
    }

    function maybeRaf() {
        if (queueActions.length && !frame) frame = requestAnimationFrame(loop);
    };

    return action => {
        if (!action.meta || !action.meta.raf) {
            return next(action);
        };

        queueActions.push(action);
        maybeRaf();

        return function cancel() {
            if (!!frame) cancelAnimationFrame(frame);
            frame = null;
        };
    };
};

// promise
const vanillaPromise = store => next => action => {
    if (typeof action.then !== 'function') return next(action);

    return Promise.resolve(action).then(store.dispatch);
}

const readyStatePromise = store => next => action => {
    if (!action.promise) return next(action);

    function makeAction(ready, data) {
        const newAction = Object.assign({}, action, { ready }, data);

        delete newAction.promise;
        return newAction;
    }

    next(makeAction(false));

    return action.promise.then(
        result => next(makeAction(true, { result })),
        error => next(makeAction(true, { result }))
    );
};

// thunk
const thunk = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState());
    } else {
        return next(action);
    }
}

// reducers
const reducers = (state, action) => {
    return state;
};

const store = createStore(
    createRootReducers(history),
    {},
    compose(
        applyMiddleware(
            routerMiddleware(history),
            rafScheduler,
            timeoutScheduler,
            thunk,
            vanillaPromise,
            readyStatePromise,
            logger,
            crashReporter
        )
    )
);

export {
    store as default,
    history
};