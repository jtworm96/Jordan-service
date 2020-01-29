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
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem possimus perspiciatis maxime accusamus, hic odio tempore, voluptate fugiat impedit rerum harum. Vero qui officia pariatur sit quaerat facere veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur laboriosam architecto nulla corporis consequatur iure porro possimus quibusdam maxime aliquam accusamus at sunt, soluta voluptates inventore, sint temporibus quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur illo ipsam vero necessitatibus possimus porro, numquam, tempore suscipit officiis voluptate veritatis in consectetur dicta tenetur ut molestias voluptates animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam itaque alias mollitia saepe soluta recusandae in expedita non eius error, atque quae labore, sapiente dolore maiores, molestias corporis! Nemo.
          </span>
        </div>
        <button className="details-expand" onClick={this.setState({expanded: true})}>Learn more about this item</button>
      </div>
    )
  }
}