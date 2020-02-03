import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="profile">
            <img className="profileimg" height="100px" src={this.props.image}></img>
            <div className="profileinfo">
              <h3 className="profilename">{this.props.name}</h3>
              <p className="profilelocation">
                <span>
                  <svg className="profilemarker" style={{fill: "rgb(117, 117, 117)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12,3A6.287,6.287,0,0,0,6,9c0,3.167,6,12,6,12s6-8.812,6-12A6.287,6.287,0,0,0,12,3Zm0,7.875a2.25,2.25,0,1,1,2.25-2.25A2.25,2.25,0,0,1,12,10.875Z"></path>
                  </svg>
                </span>
                <span className="profilename">{this.props.location}</span>
              </p>
            </div>
        </div>
    )
  }
}