const INIT_STATE = {
    carts :[],
    products : []
}

export const cartreducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }
        case "ADD_PRODUCT":
            return{
                ...state,
                products:[...state.products,action.payload]
            }
            default : 
            return state
    }
}