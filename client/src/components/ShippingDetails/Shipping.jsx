import React from 'react';

export default class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="checkout-shipping">
            <div>
              <strong>
                Estimated delivery:
                <div className="checkout-shippingdate">
                  {this.props.shippingDate}
                  <div className="checkout-content">
                    <p className="checkout-message">
                      The estimated delivery date is based on your purchase date, the recipient's location, the seller's processing time and location, and the shipping carrier. Other factors—like placing an order on a weekend or a holiday—may end up pushing the arrival of your item beyond the estimated delivery date. It's our hope that your item gets where it's going as soon as possible, but given the factors involved, this is only an estimate.
                    </p>
                    <a href="" className="checkout-shippingLearnmore">Learn more</a>
                  </div>
                </div>
                <br/>
                Made just for you in 1-2 weeks
              </strong>
              <br/>
              From {this.props.location}
              <br/>
              <p className="checkout-shippingcost">
                ${Math.round(Math.random() * 10)} shipping to United States, 7870{Math.floor(Math.random() * 9)}
              </p>
            </div>
        </div>
    )
  }
}