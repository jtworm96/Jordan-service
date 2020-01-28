import React from 'react';

export default class BuyButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="buy-buttons">
            <button className="buynow">Buy it now</button>
            <br/>
            <button className="addcart">Add to cart</button>
        </div>
    )
  }
}