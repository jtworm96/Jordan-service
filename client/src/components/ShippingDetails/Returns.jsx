import React from 'react';

export default class Returns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="returns">
            <strong>Returns and exchanges accepted</strong>
            <p className="returnExceptions">Exceptions may apply.</p>
            <a href="" className="shopPolicies">View shop policies</a>
        </div>
    )
  }
}