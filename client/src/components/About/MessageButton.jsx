import React from 'react';

export default class MessageButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div>
          <button className="checkout-message-button">Message {this.props.name}</button>
        </div>
    )
  }
}