import React from 'react';

export default function Title(props) {
  return (
      <div className="title">
        <h2 className="title">{props.title}</h2>
      </div>
  );
}