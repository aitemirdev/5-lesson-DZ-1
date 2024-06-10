import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = (amount) => {
        dispatch({ type: 'INCREMENT', payload: amount });
    };

    const handleDecrement = (amount) => {
        dispatch({ type: 'DECREMENT', payload: amount });
    };

    const handleReset = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <div className="counter-container">
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            <div className="btn-block">
                <button onClick={() => handleIncrement(1)}>+1</button>
                <button onClick={() => handleDecrement(1)}>-1</button>
                <button onClick={() => handleIncrement(10)}>+10</button>
                <button onClick={() => handleDecrement(10)}>-10</button>
                <button onClick={handleReset}>Reset</button>
            </div>

        </div>
    );
};

export default Counter;