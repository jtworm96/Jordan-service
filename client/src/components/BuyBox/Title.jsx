import React from 'react';

export default function Title(props) {
  return (
      <div className="checkout-title">
        <h2 className="checkout-title">{props.title}</h2>
      </div>
  );
}