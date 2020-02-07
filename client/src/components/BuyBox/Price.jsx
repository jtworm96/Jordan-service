import React from 'react';

export default function Price(props) {
  let saleprice = (props.price - 1 - Math.random()).toFixed(2);
  let percent = ((saleprice)/props.price)*100;

  return (
      <div>
          <div className="checkout-pricecontainer">
            <div className="checkout-saleprice">${saleprice}+</div>
            <div className="checkout-price">${props.price}+</div>
          </div>
          <p className="checkout-savings">You save ${(props.price - saleprice).toFixed(2)} ({Math.round(percent)}%)</p>
      </div>
  )
}