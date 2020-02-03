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
    this.state = {
      listingId: 1,
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
      .get(`/listings/${this.state.listingId}`)
      .then(response => {
        this.setState({listing: response.data[0]});
        console.log(this.state.listing);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render () {
    return (
        <div className="container">
          <BuyBox listingid={this.state.listingId} listing={this.state.listing}/>
          <hr/>
          <ListingDetails description={this.state.listing.description}/>
          <hr/>
          <ShippingDetails />
          <hr />
          <About listing={this.state.listing}/>
          <hr />
          <FAQ />
          <hr />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));