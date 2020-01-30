import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BuyBox from './components/BuyBox/BuyBox.jsx';
import ListingDetails from './components/ListingDetails/ListingDetails.jsx';
import ShippingDetails from './components/ShippingDetails/ShippingDetails.jsx';
import About from './components/About/About.jsx';
import FAQ from './components/FAQ/FAQ.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="container">
            <BuyBox />
            <hr/>
            <ListingDetails />
            <hr/>
            <ShippingDetails />
            <hr />
            <About name={"HARDCODED"}/>
            <hr />
            <FAQ />
            <hr />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));