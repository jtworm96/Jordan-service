import React from 'react';
import Handmade from './Handmade.jsx';
import Details from './Details.jsx';

export default class ListingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <div className="listing-details">
            <h3><strong>Item Details</strong></h3>
            <Handmade />
            <Details description={"This is a test description, please disreguard :) asdasdasdkjasbfskjdbfs sdkjfbskjdfnbs fsd fshd fksjhd fkdfn gdkhfbgdkfbgd kfng dkfn gkdfn gkdnf gkdnf gkdn fgkdnfg kjnd fgkndf gkdn fgknd fgknd fgkd fgknd fgkdnf gkdnf gkdnf gkn dfkn gd Thanks :)This is a test description, please disreguard :) asdasdasdkjasbfskjdbfs sdkjfbskjdfnbs fsd fshd fksjhd fkdfn gdkhfbgdkfbgd kfng dkfn gkdfn gkdnf gkdnf gkdn fgkdnfg kjnd fgkndf gkdn fgknd fgknd fgkd fgknd fgkdnf gkdnf gkdnf gkn dfkn gd Thanks :)This is a test description, please disreguard :) asdasdasdkjasbfskjdbfs sdkjfbskjdfnbs fsd fshd fksjhd fkdfn gdkhfbgdkfbgd kfng dkfn gkdfn gkdnf gkdnf gkdn fgkdnfg kjnd fgkndf gkdn fgknd fgknd fgkd fgknd fgkdnf gkdnf gkdnf gkn dfkn gd Thanks :)This is a test description, please disreguard :) asdasdasdkjasbfskjdbfs sdkjfbskjdfnbs fsd fshd fksjhd fkdfn gdkhfbgdkfbgd kfng dkfn gkdfn gkdnf gkdnf gkdn fgkdnfg kjnd fgkndf gkdn fgknd fgknd fgkd fgknd fgkdnf gkdnf gkdnf gkn dfkn gd Thanks :)"}/>
        </div>
    )
  }
}