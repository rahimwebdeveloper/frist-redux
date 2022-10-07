// state - count:0 ,
// actions - increment decrement reset 
// reducer 
// store gerStore(), subscribe dispatch

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

const RESET = "RESET";

const { createStore } = require("redux");



// state 
const initialState = {
    count: 0,
}

// actions 

//increment 
const incrementCounterActions = () => {
    return {
        type: INCREMENT,
    }
}

//decrement 
const decrementCounterActions = () => {
    return {
        type: DECREMENT,
    }
}

//reset  
const resetCounterActions = () => {
    return {
        type: RESET,
    }
}
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    }
}

// Creating Reducer 

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
            
        case RESET:
            return {
                ...state,
                count: 0
            }

        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: 0
            }


        default:
            state;
    }
}

// store 

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState())
})



// store.dispatch(incrementCounterActions())
// store.dispatch(incrementCounterActions())
// store.dispatch(incrementCounterActions())
// store.dispatch(incrementCounterActions())
// store.dispatch(incrementCounterActions())
// store.dispatch(decrementCounterActions())
// store.dispatch(decrementCounterActions())
// store.dispatch(decrementCounterActions())
// store.dispatch(decrementCounterActions())
// store.dispatch(incrementCounterActions())
// store.dispatch(resetCounterActions())
store.dispatch(incrementCounterByValue(5))