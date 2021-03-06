class Api::ListingsController < ApplicationController

  def show
    @listing = Listing.with_attached_photos.find(params[:id])
  end

  def index
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all
    if @listings
      render :index
    else
      render json: ['Halt Traveler!'], status: 422
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

    if @listing.update_attributes(listing_params)
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
    render json: ['Listing removed']
  end


  private

  def listing_params
    params.require(:listing).permit(:host_id, :name, :description, :location, :longitude, :latitude, :price, :guests, :benches, :power_rack, :deadlift_platform, photos: [] )
  end

  def bounds
    params[:bounds]
  end
end

