# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#id: 1
User.create!(username: 'calvin', password: '123456', first_name: 'Calvin', last_name: 'Feng',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462399141/Profile/admin.jpg")
#id: 2
User.create!(username: 'tomato', password: '123456', first_name: 'Tomato', last_name: 'Yi',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462399285/Profile/tomato.jpg")
#id: 3
User.create!(username: 'trey', password: '123456', first_name: 'Trey', last_name: 'Ratcliff',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462410132/Profile/trey.jpg")
#id: 4
User.create!(username: 'ansel', password: '123456', first_name: 'Ansel', last_name: 'Adams',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462410234/Profile/ansel.jpg")
#id: 5
User.create!(username: 'guest', password: 'password', first_name: 'Guest', last_name: 'Recruiter',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462400515/Profile/avatar.png")
#id: 6
User.create!(username: 'maxwell', password: '123456', first_name: 'James', last_name: 'Maxwell',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462556309/Profile/maxwell.jpg")
#id: 7
User.create!(username: 'turing', password: '123456', first_name: 'Alan', last_name: 'Turing',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462555648/Profile/turing.jpg")
#id: 8
User.create!(username: 'schrodinger', password: '123456', first_name: 'Erwin', last_name: 'Schrodinger',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462555482/Profile/schrodinger.jpg")
#id: 9
User.create!(username: 'bohr', password: '123456', first_name: 'Niels', last_name: 'Bohr',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462555366/Profile/bohr.jpg")
#id: 10
User.create!(username: 'heisenberg', password: '123456', first_name: 'Werner', last_name: 'Heisenberg',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462555321/Profile/heisenberg.jpg")
#id: 11
User.create!(username: 'ritchie', password: '123456', first_name: 'Dennis', last_name: 'Ritchie',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462556312/Profile/ritchie.jpg")

# Production seed data

## San Francisco
Photo.create!(user_id: 2, title: "Golden Gate", url: "https://res.cloudinary.com/megapx/image/upload/v1462145861/Seeds/1.jpg",
lat: 37.808409, lng: -122.470737, width: 2000, height: 1337)
Photo.create!(user_id: 2, title: "Market", url: "https://res.cloudinary.com/megapx/image/upload/v1462145872/Seeds/2.jpg",
lat: 37.767284, lng: -122.427950, width: 2000, height: 1335)
Photo.create!(user_id: 2, title: "Sunset Through the Golden Gate", url: "https://res.cloudinary.com/megapx/image/upload/v1462145876/Seeds/3.jpg",
lat: 37.806762, lng: -122.471380, width: 2000, height: 1335)
Photo.create!(user_id: 2, title: "Fireworks", url: "https://res.cloudinary.com/megapx/image/upload/v1462145882/Seeds/4.jpg",
lat: 37.823306, lng: -122.375937, width: 2000, height: 949)
Photo.create!(user_id: 2, title: "5", url: "https://res.cloudinary.com/megapx/image/upload/v1462145894/Seeds/5.jpg",
lat: 37.795504, lng: -122.391214, width: 2000, height: 1335)
# Photo.create!(user_id: 3, title: "6", url: "https://res.cloudinary.com/megapx/image/upload/v1462145889/Seeds/6.jpg",
# lat: 37.805406, lng: -122.453356, width: 2000, height: 1335)
# Photo.create!(user_id: 3, title: "7", url: "https://res.cloudinary.com/megapx/image/upload/v1462145898/Seeds/7.jpg",
# lat: 37.826832, lng: -122.491980, width: 2000, height: 859)
Photo.create!(user_id: 3, title: "8", url: "https://res.cloudinary.com/megapx/image/upload/v1462145917/Seeds/8.jpg",
lat: 37.741633, lng: -122.440310, width: 2000, height: 1090)
# # Photo.create!(user_id: 3, title: "9", url: "https://res.cloudinary.com/megapx/image/upload/v1462145897/Seeds/9.jpg",
# lat: 37.807576, lng: -122.474127, width: 1024, height: 768)
# Photo.create!(user_id: 3, title: "10", url: "https://res.cloudinary.com/megapx/image/upload/v1462145907/Seeds/10.jpg",
# lat: 37.829951, lng: -122.488203, width: 2000, height: 839)
Photo.create!(user_id: 2, title: "11", url: "https://res.cloudinary.com/megapx/image/upload/v1462145913/Seeds/11.jpg",
lat: 37.801744, lng: -122.478590, width: 688, height: 1000)
Photo.create!(user_id: 2, title: "12", url: "https://res.cloudinary.com/megapx/image/upload/v1462145928/Seeds/12.jpg",
lat: 37.777179, lng: -122.432732, width: 2000, height: 721)
Photo.create!(user_id: 2, title: "13", url: "https://res.cloudinary.com/megapx/image/upload/v1462145931/Seeds/13.jpg",
lat: 37.786958, lng: -122.438250, width: 2000, height: 1589)
Photo.create!(user_id: 2, title: "14", url: "https://res.cloudinary.com/megapx/image/upload/v1462145923/Seeds/14.jpg",
lat: 37.802151, lng: -122.396879, width: 2000, height: 1333)
Photo.create!(user_id: 2, title: "15", url: "https://res.cloudinary.com/megapx/image/upload/v1462145936/Seeds/15.jpg",
lat: 37.821137, lng: -122.500563, width: 2000, height: 1370)
Photo.create!(user_id: 5, title: "16", url: "https://res.cloudinary.com/megapx/image/upload/v1462145862/Seeds/16.jpg",
lat: 37.794210, lng: -122.404325, width: 2000, height: 1359)
Photo.create!(user_id: 5, title: "Snake Trails", url: "https://res.cloudinary.com/megapx/image/upload/v1462145865/Seeds/17.jpg",
lat: 37.792403, lng: -122.458463, width: 2000, height: 1297)
Photo.create!(user_id: 5, title: "Mist of Twin Peaks", url: "https://res.cloudinary.com/megapx/image/upload/v1462145864/Seeds/18.jpg",
lat: 37.747198, lng: -122.438593, width: 2000, height: 1336)
Photo.create!(user_id: 5, title: "19", url: "https://res.cloudinary.com/megapx/image/upload/v1462145860/Seeds/19.jpg",
lat: 37.790485, lng: -122.390184, width: 2000, height: 1333)
Photo.create!(user_id: 5, title: "20", url: "https://res.cloudinary.com/megapx/image/upload/v1462145863/Seeds/20.jpg",
lat: 37.795640, lng: -122.481508, width: 2000, height: 1335)
Photo.create!(user_id: 5, title: "21", url:"https://res.cloudinary.com/megapx/image/upload/v1462145876/Seeds/21.jpg",
lat: 37.754407, lng: -122.447684, width: 2000, height: 1333)
Photo.create!(user_id: 4, title: "Hover over Downtown", url:"https://res.cloudinary.com/megapx/image/upload/v1462145875/Seeds/22.jpg",
lat: 37.770638, lng: -122.366581, width: 2000, height: 1333)
Photo.create!(user_id: 4, title: "23", url:"https://res.cloudinary.com/megapx/image/upload/v1462145894/Seeds/23.jpg",
lat: 37.789090, lng: -122.418079, width: 2000, height: 1350)
Photo.create!(user_id: 4, title: "Market Stream", url:"https://res.cloudinary.com/megapx/image/upload/v1462145897/Seeds/24.jpg",
lat: 37.789090, lng: -122.411556, width: 2000, height: 1328)
Photo.create!(user_id: 4, title: "25", url:"https://res.cloudinary.com/megapx/image/upload/v1462145884/Seeds/25.jpg",
lat: 37.797445, lng: -122.401116, width: 2000, height: 1250)
Photo.create!(user_id: 1, title: "26", url:"https://res.cloudinary.com/megapx/image/upload/v1462145899/Seeds/26.jpg",
lat: 37.793265, lng: -122.403413, width: 2000, height: 1335)
Photo.create!(user_id: 1, title: "27", url:"https://res.cloudinary.com/megapx/image/upload/v1462145907/Seeds/27.jpg",
lat: 37.778648, lng: -122.387635, width: 2000, height: 1265)
Photo.create!(user_id: 1, title: "28", url:"https://res.cloudinary.com/megapx/image/upload/v1462145907/Seeds/28.jpg",
lat: 37.787115, lng: -122.385029, width: 2000, height: 1125)
# Photo.create!(user_id: 1, title: "29", url:"https://res.cloudinary.com/megapx/image/upload/v1462145904/Seeds/29.jpg",
# lat: 37.795983, lng: -122.404131, width: 662, height: 1000)
Photo.create!(user_id: 1, title: "View from Twin Peaks", url:"https://res.cloudinary.com/megapx/image/upload/v1462145926/Seeds/30.jpg",
lat: 37.769063, lng: -122.439160, width: 2000, height: 1114)

## Yosemite
Photo.create!(user_id: 2, title: "Somewhere in Yosemite", url: "https://res.cloudinary.com/megapx/image/upload/v1462145978/Seeds/yosemite_1.jpg",
lat: 37.715353, lng: -119.676640, width: 2000, height: 1189)
Photo.create!(user_id: 2, title: "Sentinel Bridge", url: "https://res.cloudinary.com/megapx/image/upload/v1462145969/Seeds/yosemite_2.jpg",
lat: 37.743258, lng: -119.590165, width: 2000, height: 1333)
Photo.create!(user_id: 2, title: "Somewhere in Yosemite 3", url: "https://res.cloudinary.com/megapx/image/upload/v1462145973/Seeds/yosemite_3.jpg",
lat: 37.849923, lng: -119.567666, width: 2000, height: 1285)
Photo.create!(user_id: 2, title: "Somewhere in Yosemite 4", url: "https://res.cloudinary.com/megapx/image/upload/v1462145972/Seeds/yosemite_4.jpg",
lat: 37.715352, lng: -119.676640, width: 2000, height: 1328)
Photo.create!(user_id: 2, title: "Somewhere in Yosemite 5", url: "https://res.cloudinary.com/megapx/image/upload/v1462145968/Seeds/yosemite_5.jpg",
lat: 37.967145, lng: -119.308002, width: 2000, height: 1055)
Photo.create!(user_id: 2, title: "El Capitan", url: "https://res.cloudinary.com/megapx/image/upload/v1462145982/Seeds/yosemite_6.jpg",
lat: 37.723815, lng: -119.635444, width: 2000, height: 1300)
Photo.create!(user_id: 2, title: "Somewhere in Yosemite 7", url: "https://res.cloudinary.com/megapx/image/upload/v1462145980/Seeds/yosemite_7.jpg",
lat: 37.723820, lng: -119.633444, width: 668, height: 1000)
Photo.create!(user_id: 2, title: "Somewhere in Yosemite 8", url: "https://res.cloudinary.com/megapx/image/upload/v1462145980/Seeds/yosemite_8.jpg",
lat: 37.623820, lng: -119.411427, width: 667, height: 1000)
# Photo.create!(user_id: 2, title: "Somewhere in Yosemite 9", url: "",
# lat: , lng: , width: , height: )
Photo.create!(user_id: 2, title: "Somewhere in Yosemite 10", url: "https://res.cloudinary.com/megapx/image/upload/v1462145985/Seeds/yosemite_10.jpg",
lat: 37.993491, lng: -119.909387, width: 2000, height: 1335)
Photo.create!(user_id: 1, title: "Yosemite 11", url: "https://res.cloudinary.com/megapx/image/upload/v1462145989/Seeds/yosemite_11.jpg",
lat: 37.739466, lng: -119.411427, width: 2000, height: 1335)
Photo.create!(user_id: 3, title: "Yosemite 12", url: "https://res.cloudinary.com/megapx/image/upload/v1462145986/Seeds/yosemite_12.jpg",
lat: 37.859447, lng: -119.375849, width: 1500, height: 864)
Photo.create!(user_id: 4, title: "Moon Over Half Dome", url: "https://res.cloudinary.com/megapx/image/upload/v1462421424/Seeds/yosemite-moon-and-the-half-dome.jpg",
lat: 37.746936, lng: -119.533242, width: 864, height: 1200, description: "Awesome work I did before there was any digital camera")
Photo.create!(user_id: 4, title: "Clearing Winterstorm", url: "https://res.cloudinary.com/megapx/image/upload/v1462421425/Seeds/yosemite-valley-clearing-winterstorm.jpg",
lat: 37.715353, lng: -119.676640, width: 1600, height: 1306, description: "Epic, isn't it?")
Photo.create!(user_id: 4, title: "Winter Sunrise", url: "https://res.cloudinary.com/megapx/image/upload/v1462421428/Seeds/yosemite-winter-sunrise.jpg",
lat: 37.737651, lng: -119.638280, width: 2337, height: 1821, description: "I think this was taken at El Capitan right? I am too old, I can't remember")


## Hong Kong
Photo.create!(user_id: 3, title: "Quarry Bay", url: "https://res.cloudinary.com/megapx/image/upload/v1462421526/Seeds/hk01.jpg",
width: 2000, height: 1185, lat: 22.289131, lng: 114.208878)
Photo.create!(user_id: 3, title: "Skyscrappers", url: "https://res.cloudinary.com/megapx/image/upload/v1462421519/Seeds/hk02.jpg",
width: 1600, height: 1068, lat: 22.279204, lng: 114.145460)
Photo.create!(user_id: 3, title: "Nightscape", url: "https://res.cloudinary.com/megapx/image/upload/v1462421523/Seeds/hk03.jpg",
width: 2000, height: 1324, lat: 22.279680, lng: 114.144773)
Photo.create!(user_id: 3, title: "Untitled 4", url: "https://res.cloudinary.com/megapx/image/upload/v1462421534/Seeds/hk04.jpg",
width: 2000, height: 1138, lat: 22.281904, lng: 144.153013)
Photo.create!(user_id: 3, title: "Disappearing Culture", url: "https://res.cloudinary.com/megapx/image/upload/v1462421532/Seeds/hk05.jpg",
width: 2000, height: 1333, lat: 22.317163, lng: 114.168634)
Photo.create!(user_id: 3, title: "Windows", url: "https://res.cloudinary.com/megapx/image/upload/v1462421534/Seeds/hk06.jpg",
width: 2000, height: 1125, lat: 22.305252, lng: 114.185286)
Photo.create!(user_id: 9, title: "Construction", url: "https://res.cloudinary.com/megapx/image/upload/v1462421535/Seeds/hk07.jpg",
width: 2000, height: 1125, lat: 22.316845, lng: 114.171896)

## New York
Photo.create!(user_id: rand(10).to_i + 1, title: "Brooklyn", url: "https://res.cloudinary.com/megapx/image/upload/v1462421544/Seeds/ny01.jpg",
width: 2000, height: 750, lat: 40.700144, lng: -74.000344)
Photo.create!(user_id: rand(10).to_i + 1, title: "Night", url: "https://res.cloudinary.com/megapx/image/upload/v1462421562/Seeds/ny02.jpg",
width: 2000, height: 1333, lat: 40.708472, lng: -74.007983)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421553/Seeds/ny03.jpg",
width: 2000, height: 932, lat: 40.708538, lng: -74.033475)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421553/Seeds/ny04.jpg",
width: 1700, height: 1135, lat: 40.702421, lng: -73.996911)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421550/Seeds/ny05.jpg",
width: 2000, height: 1333, lat: 40.693441, lng: -74.003091)
Photo.create!(user_id: rand(10).to_i + 1, title: "Empire State", url: "https://res.cloudinary.com/megapx/image/upload/v1462421564/Seeds/ny06.jpg",
width: 2000, height: 1263, lat: 40.712784, lng: -74.005941)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421553/Seeds/ny07.jpg",
width: 2000, height: 1202, lat: 40.714700, lng: -73.995066)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421568/Seeds/ny08.jpg",
width: 2000, height: 1333, lat: 40.733434, lng: -73.991976)
Photo.create!(user_id: rand(10).to_i + 1, title: "My Liberty Lady", url: "https://res.cloudinary.com/megapx/image/upload/v1462421558/Seeds/ny09.jpg",
width: 2000, height: 807, lat: 40.687533, lng: -74.052690)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421578/Seeds/ny10.jpg",
width: 2000, height: 1333, lat: 40.706001, lng: -74.008801)

## Grand Canyon
Photo.create!(user_id: rand(10).to_i + 1, title: "Thunderstorm", url: "https://res.cloudinary.com/megapx/image/upload/v1462421459/Seeds/gc01.jpg",
width: 2000, height: 1218, lat: 36.037284, lng: -112.146378)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421460/Seeds/gc02.jpg",
width: 2000, height: 1253, lat: 36.059490, lng: -112.267227)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421460/Seeds/gc03.jpg",
width: 2000, height: 1334, lat: 36.073366, lng: -111.805115)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421462/Seeds/gc04.jpg",
width: 2000, height: 1362, lat: 36.026577, lng: -111.836700)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421465/Seeds/gc05.jpg",
width: 1000, height: 1000, lat: 36.175262, lng: -111.792755)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421468/Seeds/gc06.jpg",
width: 2000, height: 1352, lat: 36.192997, lng: -111.807861)
Photo.create!(user_id: rand(10).to_i + 1, title: "Explorer", url: "https://res.cloudinary.com/megapx/image/upload/v1462421467/Seeds/gc07.jpg",
width: 2000, height: 1481, lat: 36.144217, lng: -112.294006)
Photo.create!(user_id: rand(10).to_i + 1, title: "Light Up The Sky", url: "https://res.cloudinary.com/megapx/image/upload/v1462421469/Seeds/gc08.jpg",
width: 2000, height: 1335, lat: 36.113159, lng: -112.365417)
Photo.create!(user_id: rand(10).to_i + 1, title: "Horseshoe Bend", url: "https://res.cloudinary.com/megapx/image/upload/v1462421470/Seeds/gc09.jpg",
width: 2000, height: 1001, lat: 36.188564,lng: -111.803741)

## London
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421582/Seeds/uk01.jpg",
width: 1800, height: 1200, lat: 51.497410, lng: -0.176281)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421567/Seeds/uk02.jpg",
width: 2000, height: 1333, lat: 51.497410, lng: -0.176281)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421570/Seeds/uk03.jpg",
width: 2000, height: 1331, lat: 51.506219, lng: -0.075091)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421582/Seeds/uk04.jpg",
width: 1920, height: 1440, lat: 51.501023, lng: -0.119175)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421581/Seeds/uk05.jpg",
width: 2000, height: 1265, lat: 51.504409, lng: -0.076149)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421578/Seeds/uk06.jpg",
width: 2000, height: 1286, lat: 51.509455, lng: -0.104465)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421583/Seeds/uk07.jpg",
width: 2000, height: 1333, lat: 51.503317, lng: -0.123634)
Photo.create!(user_id: rand(10).to_i + 1, url: "https://res.cloudinary.com/megapx/image/upload/v1462421584/Seeds/uk08.jpg",
width: 2000, height: 1341, lat: 51.504465, lng: -0.088639)
