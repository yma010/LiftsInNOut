@bookings.each do |booking|
  if (booking)
    json.set! booking.id do
      json.extract! booking, :id, :user_id, :listing_id, :start_date, :end_date, :guests
      if (booking.listing)
        json.extract! booking.listing
      end
    end
  end
end