class ListingsController < ApplicationController
  def index
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all

    if @listings
      render :index
    else
      render json: ['Nothing to see here'], status: 422
    end

  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render "api/listings/show"
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def edit
    @listing = Listing.find(params[:id])
  end

  def update
    @listing = Listing.find(params[:id])

    if 
  end


  private_methods

  def listing_params
    params.require(:listing).permit(
      :name, 
      :description, 
      :location, 
      :longitude, 
      :latitude, 
      :price,
      :guests,
      :benches,
      :power_rack,
      :deadlift_platform
      )
  end

  def bounds
    params[:bounds]
  end
end

