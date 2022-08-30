import React from 'react'
import {Link} from 'react-router-dom'

// import {useSelector} from 'react-redux'
import {Data} from './Data'
import {getProducts} from './Redux/Action/cartActions'
import {useDispatch} from 'react-redux'


const Navbar = () => {
  const dispatch = useDispatch();

  dispatch(getProducts(Data))
  // const data = useSelector((state) => state.products)
  // console.log(data);
  return (
    <>
      <ul>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/cart">My cart</Link></li>
      </ul>
    </>
  )
}

export default Navbar