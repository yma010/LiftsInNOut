# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Generates Users
require 'open-uri'
require 'byebug'

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

cartel = marvin.listings.create!( 
host_id: marvin.id, 
name: "Strength Cartel Gym", 
description: "Big workout facility with equipment & machines for weightlifting, powerlifting & power training.", 
location: "626 Gibbons St, Los Angeles, CA 90031", 
longitude: -118.226789, 
latitude: 34.066217, 
price: 20.00, 
guests: 2, 
benches: 2, 
power_rack: 4, 
deadlift_platform: 4 
)

pool = marvin.listings.create!( 
host_id: marvin.id, 
name: "Community Pool", 
description: "Big workout facility with equipment & machines for weightlifting, powerlifting & power training.", 
location: "118 N Spring St, Los Angeles, CA 90012", 
longitude: -118.227194, 
latitude: 34.069427, 
price: 5.00, 
guests: 2, 
benches: 0, 
power_rack: 0, 
deadlift_platform: 0 
)

climb = marvin.listings.create!( 
host_id: marvin.id, 
name: "Vertical Ascent", 
description: "Big workout facility with equipment & machines for weightlifting, powerlifting & power training.", 
location: "13 N Spring St, Los Angeles, CA 90012", 
longitude: -118.227265, 
latitude: 34.068341, 
price: 45.00, 
guests: 2, 
benches: 1, 
power_rack: 0, 
deadlift_platform: 0
)

swim2 = marvin.listings.create!( 
host_id: marvin.id, 
name: "My Pool", 
description: "Big pool facility.", 
location: "66 Gibbons St, Los Angeles, CA 90031", 
longitude: -118.228094, 
latitude: 34.066534, 
price: 20.00, 
guests: 2, 
benches: 1, 
power_rack: 0, 
deadlift_platform: 0 
)

strong = todd.listings.create!( 
  host_id: todd.id, 
  name: "Stronghold Sports Gym", 
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

barbell_1 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/bb1.jpg")
barbell_2 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/bb2.jpg")
barbell_3 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/bb3.jpg")
barbell_4 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/bb4.jpg")
barbell_5 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/bb5.jpg")

cartel_1 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/bb1.jpg")
cartel_2 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/bb2.jpg")
cartel_3 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/bb3.jpg")
cartel_4 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/bb4.jpg")
cartel_5 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/bb5.jpg")


barbell.photos.attach(io: barbell_1, filename: 'bb1.jpg')
barbell.photos.attach(io: barbell_2, filename: 'bb2.jpg')
barbell.photos.attach(io: barbell_3, filename: 'bb3.jpg')
barbell.photos.attach(io: barbell_4, filename: 'bb4.jpg')
barbell.photos.attach(io: barbell_5, filename: 'bb5.jpg')

cartel.photos.attach(io: cartel_4, filename: 'bb4.jpg')
cartel.photos.attach(io: cartel_2, filename: 'bb2.jpg')
cartel.photos.attach(io: cartel_3, filename: 'bb3.jpg')
cartel.photos.attach(io: cartel_5, filename: 'bb5.jpg')
cartel.photos.attach(io: cartel_1, filename: 'bb1.jpg')

stronghold_1 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/sh1.jpg")
stronghold_2 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/sh2.jpg")
stronghold_3 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/sh3.jpg")
stronghold_4 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/sh4.jpg")
stronghold_5 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/sh5.jpg")

climb_1 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/sh1.jpg")
climb_2 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/sh2.jpg")
climb_3 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/sh3.jpg")
climb_4 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/sh4.jpg")
climb_5 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/sh5.jpg")


strong.photos.attach(io: stronghold_1, filename: 'sh1.jpg')
strong.photos.attach(io: stronghold_2, filename: 'sh2.jpg')
strong.photos.attach(io: stronghold_3, filename: 'sh3.jpg')
strong.photos.attach(io: stronghold_4, filename: 'sh4.jpg')
strong.photos.attach(io: stronghold_5, filename: 'sh5.jpg')

climb.photos.attach(io: climb_1, filename: 'sh1.jpg')
climb.photos.attach(io: climb_2, filename: 'sh2.jpg')
climb.photos.attach(io: climb_3, filename: 'sh3.jpg')
climb.photos.attach(io: climb_4, filename: 'sh4.jpg')
climb.photos.attach(io: climb_5, filename: 'sh5.jpg')

downey_1 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp1.jpg")
downey_2 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp2.jpg")
downey_3 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp3.jpg")
downey_4 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp4.jpg")
downey_5 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp5.jpg")

pool_1 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp1.jpg")
pool_2 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp2.jpg")
pool_3 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp3.jpg")
pool_4 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp4.jpg")
pool_5 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp5.jpg")

swim_1 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp1.jpg")
swim_2 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp2.jpg")
swim_3 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp3.jpg")
swim_4 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp4.jpg")
swim_5 = open("https://liftsinnout-seeds.s3-us-west-1.amazonaws.com/dp5.jpg")

downey.photos.attach(io: downey_1, filename: 'dp1.jpg')
downey.photos.attach(io: downey_2, filename: 'dp2.jpg')
downey.photos.attach(io: downey_3, filename: 'dp3.jpg')
downey.photos.attach(io: downey_4, filename: 'dp4.jpg')
downey.photos.attach(io: downey_5, filename: 'dp5.jpg')

pool.photos.attach(io: pool_1, filename: 'dp1.jpg')
pool.photos.attach(io: pool_2, filename: 'dp2.jpg')
pool.photos.attach(io: pool_3, filename: 'dp3.jpg')
pool.photos.attach(io: pool_4, filename: 'dp4.jpg')
pool.photos.attach(io: pool_5, filename: 'dp5.jpg')


swim2.photos.attach(io: swim_1, filename: 'dp1.jpg')
swim2.photos.attach(io: swim_2, filename: 'dp2.jpg')
swim2.photos.attach(io: swim_3, filename: 'dp3.jpg')
swim2.photos.attach(io: swim_4, filename: 'dp4.jpg')
swim2.photos.attach(io: swim_5, filename: 'dp5.jpg')