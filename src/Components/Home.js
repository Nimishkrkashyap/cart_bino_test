import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart} from './Redux/Action/cartActions'

const Home = () => {
  const product = useSelector((state) => state.products)
  const dispatch = useDispatch()

  // const handleAddCart = (id) => {
  //   addToCart(id)
  // }

  let itemList = product.map((item) => {
    return (
      <div className='card' key={item.id}>
        <div className='image'>
          <img src={item.img} alt={item.title} />
          <h4>{item.title}</h4>
          <button onClick={() => {dispatch(addToCart(item.id))}}>Add</button>
        </div>

        <div className="card-content">
            <p>{item.desc}</p>
            <p><b>Price: {item.price}$</b></p>
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

export default Home