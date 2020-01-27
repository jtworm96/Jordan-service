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
        <div className="listing-details">
            Item Details
            <Handmade />
            <Details />
        </div>
    )
  }
}