export const fetchListings = () => (
  $.ajax({
    method: "GET",
    url: "api/listings",
  })
);

export const fetchListing = id => (
  $.ajax({
    method: "GET",
    url: `api/listings/${id}`,
  })
);

export const createListing = listing => (
  $.ajax({
    method: "POST",
    url: `api/listings/`,
    data: { listing },
    contentType: false,
    processData: false
  })
);

export const updateListing = listing => (
  $.ajax({
    method: "PATCH",
    url: `api/listings/${listing.id}`, 
    contentType: false,
    processData: false
  })
)

export const deleteListing = id => (
  $.ajax({
    url: `api/listings/${id}`,
    method: 'DELETE'
  })
);
