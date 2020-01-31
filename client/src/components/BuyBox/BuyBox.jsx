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
        1: {
          bestseller: false,
          types: [],
          inputType: {},
          quantity: 14
        },
        2: {
          bestseller: true,
          types: [],
          inputType: {},
          quantity: 33
        },
        3: {
          bestseller: false,
          types: ["Initial Charm"],
          inputType: {"dropdown":["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]},
          quantity: 4
        },
        4: {
          bestseller: false,
          types: [],
          inputType: {},
          quantity: 1
        },
        5: {
          bestseller: false,
          types: [],
          inputType: {},
          quantity: 3
        },
        6: {
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
        <div className="buy-box">
            <Reviews username={"HARDCODED"} count={1337} />
            <Title title={"Harry Potter [HARDCODED] - Bandanas and Accessories"} />
            <Price saleprice={15.00} price={20.00}/>
            <Variations products={this.state.products} />
            <BuyButtons />
            <Nudge />
        </div>
    )
  }
}