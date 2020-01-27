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
            MEET hardcoded
            <Profile />
            <MessageButton />
            This seller usually responds within a few hours.
        </div>
    )
  }
}