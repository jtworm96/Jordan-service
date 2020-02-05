import React from 'react';

export default class BuyButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="checkout-buy-buttons">
            <button className="checkout-buynow">Buy it now</button>
            <br/>
            <button className="checkout-addcart">Add to cart</button>
        </div>
    )
  }
}