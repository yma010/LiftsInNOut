class ListingsController < ApplicationController
  def index
    listings = bounds ? Listing.in_bounds(bounds) : Listing.all
  end
end
