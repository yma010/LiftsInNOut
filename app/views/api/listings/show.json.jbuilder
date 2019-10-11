json.listing do
  json.partial! 'api/listings/listing', listings: @listing
end