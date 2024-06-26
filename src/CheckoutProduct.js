import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,image,title,price,rating}) {
    const [,dispatch] =useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id                    
        })
    }
    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt={image}/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
            {Array(rating)
                .fill()
                .map((_, i) => (
                <p key={i}>⭐</p>
            ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct