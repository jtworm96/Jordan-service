import React from 'react';

export default function Price(props) {
  return (
      <div>
          <div className="pricecontainer">
            <div className="saleprice">${props.saleprice}+</div>
            <div className="price">${props.price}+</div>
          </div>
          <p className="savings">You save ${props.price-props.saleprice} ({((props.price-props.saleprice)/props.price)*100}%)</p>
      </div>
  )
}