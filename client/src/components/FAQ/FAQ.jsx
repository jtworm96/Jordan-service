import React from 'react';

export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.toggleFAQ = this.toggleFAQ.bind(this);
  }

  toggleFAQ() {
    this.setState({expanded: !this.state.expanded});
  }

  render () {
    return (
        <div className="checkout-FAQ">
            <button className="checkout-faqbutton" onClick={() => {this.toggleFAQ()}}>FAQ</button>
            <div className={this.state.expanded ? "checkout-faqexpanded" : "checkout-faqclosed"}>
              Q: Who worked on this right column?
              <br/>
              A: <a className="checkout-faqlink" href="https://github.com/Etsy-FEC/Checkout-Description/blob/master/README.md" target="_blank">Sager Williams</a>
            </div>
        </div>
    )
  }
}