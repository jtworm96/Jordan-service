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
      <div className="details">
        <div className={this.state.expanded ? "details-div-expanded" : "details-div-hidden"}>
          <span>{this.props.description}</span>
        </div>
        <button className="details-expand" onClick={() => {this.state.expanded ? this.setState({expanded: false}) : this.setState({expanded: true})}}>{this.state.expanded ? "Less" : "Learn more about this item"}</button>
      </div>
    )
  }
}