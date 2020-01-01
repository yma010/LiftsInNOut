@bookings.each do |booking|
  if (booking)
    json.set! booking.id do
      json.extract! booking, :id, :user_id, :listing_id, :start_date, :end_date, :guests
      if (booking.listing)
        json.set! 'listing' do
          json.extract! booking.listing, :id, :host_id, :title, :description, :location, :latitude, :longitude, :benches, :power_rack, :deadlift_platform
        end
      end
    end
  end
end