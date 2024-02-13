import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {useNavigate} from 'react-router-dom';

function Subtotal() {
  const history = useNavigate();
  const [state] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
          renderText={(value)=>(
            <div>
              <p>
                Subtotal ({state.basket?.length} items): <strong>{value}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type="checkbox" />This oder contains a gift
              </small>
            </div>
          )} 
           decimalScale={2}
          value={getBasketTotal(state.basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"} 
        />

        <button onClick={()=>history('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;