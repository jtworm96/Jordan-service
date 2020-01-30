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
        <div className="about">
            Meet <a href="" className="aboutname">{this.props.name}</a>
            <Profile name={"HARDCODED NAME"} location={"HARDCODED LOCATION"} />
            <MessageButton name={"HARDCODED NAME"} />
            <p className="aboutresponds">This seller usually responds <strong>within a few hours.</strong></p>
        </div>
    )
  }
}