import React from 'react';
import ListingIndexContainer from '../listings/listings_index_container';
import ListingsMap from '../listings/listings_map';

class Search extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    const {
      listings,
      updateFilter,
      searchCoords
    } = this.props;

    return (
      <div>
        <div className="listings-index">
          <ListingIndexContainer />
        <div className="listings-index-map">
          <ListingsMap
            listings={listings}
            updateFilter={updateFilter}
            searchCoords={searchCoords}
          />
        </div>
        </div>
      </div>
    )
  }
  
}

export default Search;