import React, { useState } from 'react';

interface CounterProps {
    render: (counter: number) => React.ReactNode
}

const Counter = ({ render }: CounterProps) => {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => setCounter(prevCounter => prevCounter + 1);
    const decreaseCounter = () => setCounter(prevCounter => prevCounter - 1);


    return (
        <div>
            <button className='px-2 mx-auto bg-gray-300 mr-2' onClick={increaseCounter}>+</button>
            <button className='px-2 mx-auto bg-gray-300 mr-2' onClick={decreaseCounter}>-</button>

            {render(counter)}
        </div>
    );
};

export default Counter;
