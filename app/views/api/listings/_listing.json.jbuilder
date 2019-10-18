json.extract! listing, :id, :host_id, :name, :description, :location,:latitude, :longitude, :price, :guests, :benches, :power_rack, :deadlift_platform

if listing.photos.attached?
  json.photoUrls listing.photos.map { |file| url_for(file) }
end