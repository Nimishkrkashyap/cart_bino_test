import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {subtractQuantity, addQuantity} from './Redux/Action/cartActions'

const Cart = () => {
  const cartData = useSelector(state => state.addedItems)
  const dispatch = useDispatch()
  // console.log(cartData);
  let itemList = cartData.map((item) => {
    return (
      <div className='card' key={item.id}>
        <div className='image'>
          <img src={item.img} alt={item.title} />
          <h4>{item.title}</h4>
          
        </div>

        <div className="card-content">
            <p>{item.desc}</p>
            <p><b>Price: {item.price}$</b></p>
            <p>Quantity: {item.quantity}</p>
        </div>
        <div className='count'>
            <button className='btn' onClick={() => {dispatch(subtractQuantity(item.id))}}>-</button>
            <button className='btn' onClick={() => {dispatch(addQuantity(item.id))}}>+</button>
        </div>
      </div>
    )
  })
  
  return (
    <div>
      <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
    </div>
  )
}

export default Cart




// ...state,
// products: action.products