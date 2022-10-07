const { createStore } = require('redux');

// product constants

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// cart initial 

const initialCartItems = {
    cart: ['friend'],
    numberOfCart: 1,
}

// cart actions 

const getCartItems = () => {
    return{
        type: GET_CART_ITEMS,
    }
}

const addCartItems = (cart) => {
    return{
        type: ADD_CART_ITEM,
        payload: cart,
    }
}



// products initial

const initialProducts = {
    products: ["mango", "chips"],
    numberProducts: 2,
}


// product actions

const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}


// products reducer

const productReducer = (state = initialProducts, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            }

        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberProducts: state.numberProducts + 1,
            }

        default:
            state;
    }
}


const store = createStore(productReducer);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts());
store.dispatch(addProduct("rice"));

// cartReducer 

