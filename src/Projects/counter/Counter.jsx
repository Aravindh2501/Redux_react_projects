import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, resetCount, subCount } from '../../redux/slices/counterSlices/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const counterStyle = {
        textAlign: 'center',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    };

    const buttonStyle = {
        margin: '5px',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
    };

    return (
        <div className='Counter' style={counterStyle}>
            <h2>Counter</h2>
            <div className="main__counter">
                <h2>{count}</h2>
                <div className="">
                    <button style={buttonStyle} onClick={() => dispatch(subCount())}>Decrement</button>
                    <button style={buttonStyle} onClick={() => dispatch(resetCount())}>Reset</button>
                    <button style={buttonStyle} onClick={() => dispatch(addCount())}>Increment</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
