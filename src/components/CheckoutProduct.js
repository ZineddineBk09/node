import React from 'react'
import { useStateValue } from '../React-Context-Api/StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    //remove the item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img src={image} alt='' className='checkoutProduct__image' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__infoTitle'>{title}</p>
        <p className='checkoutProduct__infoPrice'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__infoRating'>
          {Array(rating > 5 ? 5 : rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
