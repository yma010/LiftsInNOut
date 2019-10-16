import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({ listings }) => (
  <li className="listings-index-item">
    <div className="listings-index-item-details">
    <Link to={`/listings/${listings.id}`}>{listings.name}

    <div className="listings-index-location">
      Address: {listings.location}
    </div>

    <div className="listings-index-desc">
      {listings.description}
    </div>

    <div className="listings-index-equipment">
      <div className="listings-index-bench">
        Bench: {listings.benches}
      </div>

      <div className="listings-index-rack">
        Power Rack: {listings.power_rack}
      </div>

      <div className="listings-index-platform">
        Deadlift Platforms: {listings.deadlift_platform}
      </div>
    </div>
    </Link>
    <div className="listings-index-price">${listings.price} / Day</div>
    </div>
  </li>
);

export default ListingIndexItem;
