@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'api/listings/listing', listing: listing
  end
  json.bookings do
    listing.bookings.each do |booking|
      json.set! booking.id do
        json.extract! booking, :id, :user_id, :listing_id, :start_date, :end_date, :guests
      end
    end
  end
end
