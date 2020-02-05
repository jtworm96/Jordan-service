import React from 'react';
import MessageButton from './MessageButton.jsx';
import Profile from './Profile.jsx';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="checkout-about">
            Meet <a href="" className="checkout-aboutname">{this.props.listing.name}</a>
            <Profile name={this.props.listing.name} location={"Germany"} image={this.props.listing.picture}/>
            <MessageButton name={this.props.listing.name} />
            <p className="checkout-aboutresponds">This seller usually responds <strong>within a few hours.</strong></p>
        </div>
    )
  }
}