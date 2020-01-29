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
    this.state = {};
  }

  render () {
    return (
        <div className="buy-box">
            <Reviews username={"HARDCODED"} count={1337} />
            <Title title={"Harry Potter [HARDCODED] - Bandanas and Accessories"} />
            <Price saleprice={15.00} price={20.00}/>
            {/* <Variations /> */}
            <BuyButtons />
            <Nudge />
        </div>
    )
  }
}