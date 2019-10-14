import * as ListingApiUtil from '../util/listings_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = 'REMOVE_LISTING';

const receiveAllListings = listings => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
});

const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

const removeListing = listingId => ({
  type: REMOVE_LISTING,
  listingId
});

export const fetchListings = () => dispatch => (
  ListingApiUtil.fetchListings()
  .then((listings) => dispatch(receiveAllListings(listings))));
  //.then(listings => dispatch(receiveAllListings(listings)))

export const fetchListing = id => dispatch => {
  // debugger;
  return (ListingApiUtil.fetchListing(id)
    .then(listing => {
      return dispatch(receiveListing(listing));
    }));
};

export const createListing = listing => dispatch => (
  ListingApiUtil.createListing(listing)
    .then(listing => {
      return dispatch(receiveListing(listing));
    })
);

export const updateListing = listing => dispatch => (
  ListingApiUtil.updateListing(listing)
  .then(listing => {
    return dispatch(receiveListing(listing));
  })
);

export const deleteListing = listingId => dispatch => (
  ListingApiUtil.deleteListing(listingId)
    .then(listing => {
      return dispatch(removeListing(listingId));
    })
);