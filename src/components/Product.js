import React, { useState } from 'react'
import { useStateValue } from '../React-Context-Api/StateProvider'
import './Product.css'

function Product({ id, title, image, price, rating }) {
  const truncate = (str, maxlength) => {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str
  }
  const [readMore, setReadMore] = useState(false)

  //get number of products from the state({basket} is part of dispatch)
  const [{ basket }, dispatch] = useStateValue()
  const addToBasket = () => {
    console.log('Basket :', basket)
    //dispatch item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <p>
          {readMore ? title : truncate(title, 40)}
          <button className='readMore' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'read less' : 'read more'}
          </button>
        </p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {/* create an array from rating and fill it with ⭐ then we loop through it and display them*/}
          {Array(rating > 5 ? 5 : rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
