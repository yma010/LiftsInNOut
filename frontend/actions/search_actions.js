export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const updateSearch = (lat, lng) =>({
  type: UPDATE_SEARCH,
  coords: {
    latitude: lat,
    longitude: lng
  }
})