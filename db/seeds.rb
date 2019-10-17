# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Generates Users
require 'open-uri'

User.destroy_all

hunter = User.create!(
    fname: "Hunter", 
    lname: "Hunt", 
    email: "hunter2@gmail.com", 
    password: "hunter2"
)

marvin = User.create!(
    fname: "Marvin",
    lname: "Ma", 
    email: "ma@gmail.com", 
    password: "hunter2"
)

todd = User.create!(
    fname: "Todd",
    lname: "Howard", 
    email: "Bethesda@gmail.com", 
    password: "hunter2"
)

johnny = User.create!(
    fname: "Johnny",
    lname: "Sins", 
    email: "multitalented@gmail.com", 
    password: "hunter2"
)

Listing.destroy_all

##Generate Listings
barbell = marvin.listings.create!( 
  host_id: marvin.id, 
  name: "Barbell Brigade", 
  description: "Big workout facility with equipment & machines for weightlifting, powerlifting & power training.", 
  location: "646 Gibbons St, Los Angeles, CA 90031", 
  longitude: -118.2237428, 
  latitude: 34.066082, 
  price: 20.00, 
  guests: 2, 
  benches: 2, 
  power_rack: 4, 
  deadlift_platform: 4 
  )

strong = todd.listings.create!( 
  host_id: todd.id, 
  name: "Strong Sports Gym", 
  description: "Gym offering private & group classes for boxing, MMA, jiu-jitsu, Olympic weightlifting & more.", 
  location: "1318 N Spring St, Los Angeles, CA 90012", 
  longitude: -118.232755, 
  latitude: 34.0662774, 
  price: 30.00, 
  guests: 2, 
  benches: 4, 
  power_rack: 4, 
  deadlift_platform: 4 
)

downey = johnny.listings.create!( 
  host_id: johnny.id, 
  name: "Downey Swimming Pool", 
  description: "Small, local swimming pool", 
  location: "1775 N Spring St, Los Angeles, CA 90031", 
  longitude: -118.2306736, 
  latitude: 34.0694591,
  price: 15.00, 
  guests: 4, 
  benches: 0, 
  power_rack: 0, 
  deadlift_platform: 0
)



barbell_1 = open('https://s3.amazonaws.com/liftsinnout-seeds/bb1.jpg')
barbell_2 = open('https://s3.amazonaws.com/liftsinnout-seeds/bb2.jpg')
barbell_3 = open('https://s3.amazonaws.com/liftsinnout-seeds/bb3.jpg')
barbell_4 = open('https://s3.amazonaws.com/liftsinnout-seeds/bb4.jpg')
barbell_5 = open('https://s3.amazonaws.com/liftsinnout-seeds/bb5.jpg')

barbell.listing.attach(io: barbell_1, filename: 'bb1.jpg')
barbell.listing.attach(io: barbell_2, filename: 'bb2.jpg')
barbell.listing.attach(io: barbell_3, filename: 'bb3.jpg')
barbell.listing.attach(io: barbell_4, filename: 'bb4.jpg')
barbell.listing.attach(io: barbell_5, filename: 'bb5.jpg')

stronghold_1 = open('https://s3.amazonaws.com/liftsinnout-seeds/sh1.jpg')
stronghold_2 = open('https://s3.amazonaws.com/liftsinnout-seeds/sh2.jpg')
stronghold_3 = open('https://s3.amazonaws.com/liftsinnout-seeds/sh3.jpg')
stronghold_4 = open('https://s3.amazonaws.com/liftsinnout-seeds/sh4.jpg')
stronghold_5 = open('https://s3.amazonaws.com/liftsinnout-seeds/sh5.jpg')


strong.listing.attach(io: stronghold_1, filename: 'sh1.jpg')
strong.listing.attach(io: stronghold_2, filename: 'sh2.jpg')
strong.listing.attach(io: stronghold_3, filename: 'sh3.jpg')
strong.listing.attach(io: stronghold_4, filename: 'sh4.jpg')
strong.listing.attach(io: stronghold_5, filename: 'sh5.jpg')

downey_1 = open('https://s3.amazonaws.com/liftsinnout-seeds/dp1.jpg')
downey_2 = open('https://s3.amazonaws.com/liftsinnout-seeds/dp2.jpg')
downey_3 = open('https://s3.amazonaws.com/liftsinnout-seeds/dp3.jpg')
downey_4 = open('https://s3.amazonaws.com/liftsinnout-seeds/dp4.jpg')
downey_5 = open('https://s3.amazonaws.com/liftsinnout-seeds/dp5.jpg')

downey.listing.attach(io: downey_1, filename: 'dp1.jpg')
downey.listing.attach(io: downey_2, filename: 'dp2.jpg')
downey.listing.attach(io: downey_3, filename: 'dp3.jpg')
downey.listing.attach(io: downey_4, filename: 'dp4.jpg')
downey.listing.attach(io: downey_5, filename: 'dp5.jpg')