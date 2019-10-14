import React from 'react';
import ListingsMap from './map/listings_map';
import ListingIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings()
  }

  render() {
    
    let listingItems;

    listingItems = this.props.listings.map(listings => {
      // debugger;
        return(
        <ListingIndexItem key={listings.id} listings={listings} />)
      });

    return (
      <div>
        <ul>
          {listingItems}
        </ul>
        <div>
        </div>
      </div>
    );
  }
}

export default ListingsIndex;