json.partial! 'api/listings/listing', listing: @listing

json.host do
  json.extract! @listing.host, :id, :fname, :lname
end

json.bookings do
  @listing.bookings.each do |booking|
    json.set! booking.id do 
      json.extract! booking, :id, :user_id, :listing_id, :start_date, :end_date, :guests
      json.set! 'listing' do
        json.extract! booking.listing, :id, :name, :description, :price, :location, :longitude, :latitude, :benches, :power_rack, :deadlift_platform, :host_id
        json.photoUrls @listing.pictures.map { |pic| pic.url }
      end
    end
  end
end