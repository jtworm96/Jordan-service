import React from 'react';
import Shipping from './Shipping.jsx';
import Returns from './Returns.jsx';

export default class ShippingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="shipping-details">
            <strong>Shipping & Returns</strong>
            <Shipping shippingDate={"Feb 13 - 17"} location={"Germany"}/>
            <Returns />
        </div>
    )
  }
}