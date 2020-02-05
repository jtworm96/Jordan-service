import React from 'react';
import Handmade from './Handmade.jsx';
import Details from './Details.jsx';

export default class ListingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="checkout-listing-details">
            <h3><strong>Item Details</strong></h3>
            <Handmade />
            <Details description={this.props.description}/>
        </div>
    )
  }
}