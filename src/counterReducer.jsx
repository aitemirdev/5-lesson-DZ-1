import React from 'react';
const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.payload };
        case 'DECREMENT':
            return { count: Math.max(state.count - action.payload, 0) };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

export default counterReducer;