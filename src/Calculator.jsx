import { useReducer } from "react";

// Initial state for the calculator
const initialState = {
    firstNumber: 0,
    secondNumber: 0,
    res: 0
};

// Reducer function for performing calculations
function reducer(state, action) {

    switch (action.type) {

        case 'UPDATE_FIRST':
            return {
                ...state,
                firstNumber: parseFloat(action.payload)
            };

        case 'UPDATE_SECOND':
            return {
                ...state,
                secondNumber: parseFloat(action.payload)
            };

        case 'ADDITION':
            return {
                ...state,
                res: state.firstNumber + state.secondNumber
            };

        // Add the other cases here:

        default:
            return state;
    }
}

export default function Calculator() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <label>Enter a number: </label>
            <input
                id="first"
                type="number"
                value={state.firstNumber}
                onChange={(e) => dispatch({ type: 'UPDATE_FIRST', payload: e.target.value })}
            />

            <label>Enter another number: </label>
            <input
                id="second"
                type="number"
                value={state.secondNumber}
                onChange={(e) => dispatch({ type: 'UPDATE_SECOND', payload: e.target.value })}
            />

            {/*Addition Button*/}
            <button onClick={() => dispatch({type: 'ADDITION'})}>
                +
            </button>

            {/*Add Subtraction Button here*/}


            {/*Add Multiplication Button here*/}


            {/*Add Division Button here*/}


            <p>Result: {state.res}</p>
        </>
    );
}

