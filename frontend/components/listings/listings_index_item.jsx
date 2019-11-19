import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

const ListingIndexItem = ({ listings }) => (
  <li className="listings-index-item">
    <div className="listings-index-item-details">

      <div className='listing-index-item-photo-container'>
        <Carousel width={"300px"} heightMode={"first"} wrapAround={true} dragging={true}>
          <img src={listings.photoUrls[0]} />
          <img src={listings.photoUrls[1]} />
          <img src={listings.photoUrls[2]} />
          <img src={listings.photoUrls[3]} />
          <img src={listings.photoUrls[4]} />
        </Carousel>
      </div>


      <Link className="listings-index-item-desc" to={`/listings/${listings.id}`}>
        
        <div className="listings-index-name">
          {listings.name}
        </div>
        
        <div className="listings-index-equipment">

          <div className="listings-index-bench">
            {listings.benches} {listings.benches === 1 ? "bench · " : "benches · " } 
          </div>

          <div className="listings-index-rack">
            &nbsp;{listings.power_rack} {listings.power_rack === 1 ? "power rack · " : "power racks · "}
          </div>

          <div className="listings-index-platform">
            &nbsp;{listings.deadlift_platform} {listings.deadlift_platform === 1 ? "deadlift platform " : "deadlift platforms "}
          </div>

        </div>

        <div className="listings-index-price">
          ${listings.price} / Day
        </div>
        
      </Link>
    </div>
  </li>
);

export default ListingIndexItem;
