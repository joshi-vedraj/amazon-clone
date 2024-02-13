
export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => {
    const x = basket?.reduce((amount,item)=>item.price+amount,0);
    return x;
}
const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':{
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id===action.id
            )
            return {
                ...state,
                basket: state.basket.filter((_,i)=>i!==index)
            };
        }
        case 'SET_USER':{
            return {
                ...state,
                user:action.user
            }
        }
        default : return state;
    }
}

export default reducer;