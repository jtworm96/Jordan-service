import React from 'react';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render () {
    return (
      <div className="checkout-details">
        <div className={this.state.expanded ? "checkout-details-div-expanded" : "checkout-details-div-hidden"}>
          <span>{this.props.description}</span>
        </div>
        <button className="checkout-details-expand" onClick={() => {this.state.expanded ? this.setState({expanded: false}) : this.setState({expanded: true})}}>{this.state.expanded ? "Less" : "Learn more about this item"}</button>
      </div>
    )
  }
}