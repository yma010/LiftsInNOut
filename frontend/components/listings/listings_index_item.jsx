import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({ listings }) => (
  <li>
    <Link to={`/listings/${listings.id}`}>{listings.name}</Link>
    {/* <Link to={`/listings/${listings.id}/edit`}>Edit</Link>  */}
  </li>
);

export default ListingIndexItem;
