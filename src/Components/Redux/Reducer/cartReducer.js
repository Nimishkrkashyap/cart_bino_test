// import { Action } from 'history';

import { GET_PRODUCTS,ADD_TO_CART, ADD_QUANTITY,SUB_QUANTITY } from '../ActionConstant'

const initialState = {
    products: [],
    addedItems: [],
    total: 0
}
let addedItem;
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case ADD_TO_CART:
            addedItem = state.products.find(item=> item.id === action.id)
            //check if the action id exists in the addedItems
           let existed_item= state.addedItems.find(item=> action.id === item.id)
           if(existed_item)
           {
              addedItem.quantity += 1 
               return{
                  ...state,
                   total: state.total + addedItem.price 
                    }
          }
           else{
              addedItem.quantity = 1;
              //calculating the total
              let newTotal = state.total + addedItem.price 
              
              return{
                  ...state,
                  addedItems: [...state.addedItems, addedItem],
                  total : newTotal
              }
              
          }
        case ADD_QUANTITY:
            addedItem = state.products.find(item=> item.id === action.id)
            addedItem.quantity += 1 
          console.log(addedItem.quantity);
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              addedItems: [...state.addedItems],
              total: newTotal
          }  
        case SUB_QUANTITY: 
         addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            console.log(new_items);
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: [...state.addedItems],
                total: newTotal
            }
        }
        default:
            return state;    
    }
}

export default cartReducer;
