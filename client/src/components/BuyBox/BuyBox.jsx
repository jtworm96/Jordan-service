import React from 'react';
import Reviews from './Reviews.jsx';
import Title from './Title.jsx';
import Price from './Price.jsx';
import Variations from './Variations.jsx';
import BuyButtons from './BuyButtons.jsx';
import Nudge from './Nudge.jsx';

export default class BuyBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        651186954: {
          bestseller: false,
          types: [],
          inputType: {},
          quantity: 14
        },
        721236096: {
          bestseller: true,
          types: [],
          inputType: {},
          quantity: 33
        },
        742799622: {
          bestseller: false,
          types: ["Initial Charm"],
          inputType: {"dropdown":["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]},
          quantity: 4
        },
        676514443: {
          bestseller: false,
          types: [],
          inputType: {},
          quantity: 1
        },
        708762640: {
          bestseller: false,
          types: [],
          inputType: {},
          quantity: 3
        },
        772719047: {
          bestseller: false,
          types: [],
          dropdowns: {},
          quantity: 15
        }
      }
      
    };
  }

  render () {
    return (
      <div className="checkout-buy-box">
        <Reviews username={this.props.listing.name} count={this.props.listing.reviews} />
        <Title title={this.props.listing.title} />
        <Price price={this.props.listing.price}/>
        <Variations product={this.state.products[this.props.listingid]} />
        <BuyButtons />
        <Nudge />
      </div>
    )
  }
}