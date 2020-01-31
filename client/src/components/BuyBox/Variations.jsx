import React from 'react';

export default class Variations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createVariations() {
    let variations = [];

    for (let i = 0; i < this.props.products[3].types.length; i++) {
      variations.push(this.props.products[3].types[i]);
      variations.push(<br key={Math.random() * 100000}/>);
      let options = [];
      if (this.props.products[3].inputType.dropdown) {
        for (let j = 0; j < this.props.products[3].inputType.dropdown.length; j++) {
          options.push(<option key={Math.random() * 100000}>{this.props.products[3].inputType.dropdown[j]}</option>);
        }
        let selector = <select className="variation" key={Math.random() * 100000}>{options}</select>;
        variations.push(selector);
      } else {
        variations.push(<input></input>);
      }
      
      variations.push(<br key={Math.random() * 100000}/>);
    }

    return variations;
  }

  createQuantity() {
    let options = [];

    for (let i = 1; i < this.props.products[3].quantity + 1; i++) {
      options.push(<option key={i}>{i}</option>);
    }

    let selector = <select className="variations-quantity">{options}</select>;
    return selector;
  }

  render () {
    return (
        <div className="variations">
          {this.createVariations()}
          Quantity
          <br/>
          {this.createQuantity()}
        </div>
    )
  }
}