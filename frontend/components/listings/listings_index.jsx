import React from 'react';
import ListingIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings()
  }

  render() {
    
    let listingItems;

    listingItems = this.props.listings.map(listings => (<ListingIndexItem key={listings.id} listings={listings} />));

    return (
      <div>
        <div className="listings-index-header">
          {this.props.listings.length} + {this.props.listings.length === 1 ? "facilty" : "facilities"} near you!
        </div>
        <ul className="listings-index-ul">
          {listingItems}
        </ul>
      </div>
    );
  }
}

export default ListingsIndex;