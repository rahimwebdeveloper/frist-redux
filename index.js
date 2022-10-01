const INCREMENT = "INCREMENT";
const DECREMENT = "INCREMENT";
const ADD_USER = "ADD_USER";

// state 
const initialCounterState = {
    count: 0
}

const initialUserState = {
    users: [{
        name: "rahim"
    }],
}


// action  -object -type , payload 

// INCREMENT 
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

//DECREMENT

const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

// ADD USER

const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: "maruf" }
    };
};


// Create Reducer for counter

const countReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };  

        default:
            state;
    }
}



// 1. State
// 2. dispatch action
// 3. reducer
// 4. store 