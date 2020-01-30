import React from 'react';

export default class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="shipping">
            <div>
              <strong>
                Estimated delivery:
                <div className="shippingdate">
                  Feb 13 - 27
                  <div className="content">
                    <p className="message">
                      The estimated delivery date is based on your purchase date, the recipient's location, the seller's processing time and location, and the shipping carrier. Other factors—like placing an order on a weekend or a holiday—may end up pushing the arrival of your item beyond the estimated delivery date. It's our hope that your item gets where it's going as soon as possible, but given the factors involved, this is only an estimate.
                    </p>
                  </div>
                </div>
                <br/>
                Made just for you in 1-2 weeks
              </strong>
              <br/>
              From Australia
              <br/>
              $3.51 shipping to United States, 78704
            </div>
        </div>
    )
  }
}