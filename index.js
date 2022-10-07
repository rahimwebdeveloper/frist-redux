// state - count:0 ,
// actions - increment decrement reset 
// reducer 
// store gerStore(), subscribe dispatch
const { createStore } = require("redux");

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

const ADD_USER = "ADD_USER";

// const RESET = "RESET";




// state 
const initialState = {
    users: ['rahim'],
    count: 1,
}

// actions 

//increment 
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
}

//decrement  
// const decrementCounterActions = () => {
//     return {
//         type: DECREMENT,
//     }
// }

// //reset  
// const resetCounterActions = () => {
//     return {
//         type: RESET,
//     }
// }
// const incrementCounterByValue = (value) => {
//     return {
//         type: INCREMENT_BY_VALUE,
//         payload: value,
//     }
// }

// Creating Reducer 

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1,
            }

        default:
            state;
    }
}

// store 

const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState())
})




store.dispatch(addUser("saikoth bin monir "))
store.dispatch(addUser("santho"))
store.dispatch(addUser("sihab"))
store.dispatch(addUser("my fucther gril friend "))