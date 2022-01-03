import React from 'react'
import { useStateValue } from '../React-Context-Api/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Product from './Product'
import Subtotal from './Subtotal'
function Checkout() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className='checkout'>
      <div className='checkout__top'>
        <div className='checkout__topLeft'>
          <img
            className='checkout__ad'
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            alt=''
          />
          <div>
            <h2 className='checkout__title'>Shopping Basket</h2>
          </div>
        </div>
        <div className='checkout__topRight'>
          <Subtotal />
        </div>
      </div>
      {basket.map((product) => (
        <CheckoutProduct
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  )
}

export default Checkout
