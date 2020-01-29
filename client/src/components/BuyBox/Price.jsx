import React from 'react';

export default function Price(props) {
  return (
      <div>
          <p className="pricecontainer">
            <div className="saleprice">${props.saleprice}+</div>
            <div className="price">${props.price}+</div>
          </p>
          <p className="savings">You save ${props.price-props.saleprice} ({((props.price-props.saleprice)/props.price)*100}%)</p>
      </div>
  )
}