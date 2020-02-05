import React from 'react';

export default function Price(props) {
  return (
      <div>
          <div className="checkout-pricecontainer">
            <div className="checkout-saleprice">${props.saleprice}+</div>
            <div className="checkout-price">${props.price}+</div>
          </div>
          <p className="checkout-savings">You save ${props.price-props.saleprice} ({((props.price-props.saleprice)/props.price)*100}%)</p>
      </div>
  )
}