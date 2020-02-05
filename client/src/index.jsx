import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BuyBox from './components/BuyBox/BuyBox.jsx';
import ListingDetails from './components/ListingDetails/ListingDetails.jsx';
import ShippingDetails from './components/ShippingDetails/ShippingDetails.jsx';
import About from './components/About/About.jsx';
import FAQ from './components/FAQ/FAQ.jsx';

const baseURL = 'http://feccheckout-env.7hthmefjiv.us-east-2.elasticbeanstalk.com/';
// const baseURL = 'http://localhost:1337/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: 651186954,
      listing: {}
    };

    this.getListing = this.getListing.bind(this);
  }

  componentDidMount() {
    this.getListing()
    window.addEventListener("itemChanged", event => {
      this.setState({ listingId: Number(event.detail.listingId) }, () => this.getListing());
    });
  }

  getListing() {
    axios
      .get(`/listings`, {
        params: {
          listingid: this.state.listingId
        },
        baseURL
      })
      .then(response => {
        this.setState({listing: response.data[0]});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render () {
    return (
        <div className="checkout-container">
          <BuyBox listingid={this.state.listingId} listing={this.state.listing}/>
          <hr className="checkout-hr"/>
          <ListingDetails description={this.state.listing.description}/>
          <hr className="checkout-hr"/>
          <ShippingDetails />
          <hr className="checkout-hr"/>
          <About listing={this.state.listing}/>
          <hr className="checkout-hr"/>
          <FAQ />
          <hr className="checkout-hr"/>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('checkout'));