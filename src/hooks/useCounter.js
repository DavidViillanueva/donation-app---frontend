import { useState } from 'react';

//Author: David Villanueva 
//Param: initialState the value of the first number in the counter
//Out: 
//  increment -> function (increment in 1 the counter value)
//  decrement -> function (decrement in 1 the counter value)
//  reset -> function (put the counter in the value of the initialState)
//  counter -> number 

const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState( initialState );

    const increment = () => {
        setCounter( counter + 1 );
    };

    const decrement = () => {
        setCounter( counter - 1 );
    };

    const reset = () => {
        setCounter( initialState );
    };

    //Aca extraemos la logica del contador
    return {
        counter,
        increment,
        decrement,
        reset
    };
};

export default useCounter;