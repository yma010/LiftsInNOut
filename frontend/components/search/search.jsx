import React from 'react';
import ListingIndexContainer from '../listings/listings_index_container';
import ListingsMap from '../listings/listings_map';

class Search extends React.Component {
  componentDidMount(){
    // window.scrollTo(0,0);
  }

  render(){
    const {
      listings,
      fetchListings,
      fetchListing,
      updateFilter,
      searchCoords
    } = this.props;

    return (
      <div>
        <ListingIndexContainer />
        <ListingsMap
          listings={listings}
          updateFilter={updateFilter}
          searchCoords={searchCoords}
          />
      </div>
    )
  }
  
}

export default Search;