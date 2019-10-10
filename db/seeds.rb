# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(
  fname: 'Hunter',
  lname: 'Hunt',
  email: 'hunter2@gmail.com',
  password: 'hunter2`'
)

Listing.create!(
  host_id: 1,
  name: 'Blueprint Training Grounds',
  description: 'Hardcore training facility located in Garden Grove',
  location: "11258 Monarch St ste e, Garden Grove, CA 92841",
  benches: 6,
  power_rack: 6,
  deadlift_platform: 4,
  latitude: 33.799006,
  longitude: -118.0082287,
  price: 20,
  guests: 4
)


