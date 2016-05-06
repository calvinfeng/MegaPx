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

# Development/Test seed data


# Production seed data

## San Francisco
Photo.create!(user_id: 2, title: "1", url: "https://res.cloudinary.com/megapx/image/upload/v1462145861/Seeds/1.jpg",
lat: 37.808409, lng: -122.470737, width: 2000, height: 1337)
Photo.create!(user_id: 2, title: "2", url: "https://res.cloudinary.com/megapx/image/upload/v1462145872/Seeds/2.jpg",
lat: 37.767284, lng: -122.427950, width: 2000, height: 1335)
Photo.create!(user_id: 2, title: "3", url: "https://res.cloudinary.com/megapx/image/upload/v1462145876/Seeds/3.jpg",
lat: 37.806762, lng: -122.471380, width: 2000, height: 1335)
Photo.create!(user_id: 2, title: "4", url: "https://res.cloudinary.com/megapx/image/upload/v1462145882/Seeds/4.jpg",
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
Photo.create!(user_id: 5, title: "17", url: "https://res.cloudinary.com/megapx/image/upload/v1462145865/Seeds/17.jpg",
lat: 37.792403, lng: -122.458463, width: 2000, height: 1297)
Photo.create!(user_id: 5, title: "18", url: "https://res.cloudinary.com/megapx/image/upload/v1462145864/Seeds/18.jpg",
lat: 37.747198, lng: -122.438593, width: 2000, height: 1336)
Photo.create!(user_id: 5, title: "19", url: "https://res.cloudinary.com/megapx/image/upload/v1462145860/Seeds/19.jpg",
lat: 37.790485, lng: -122.390184, width: 2000, height: 1333)
Photo.create!(user_id: 5, title: "20", url: "https://res.cloudinary.com/megapx/image/upload/v1462145863/Seeds/20.jpg",
lat: 37.795640, lng: -122.481508, width: 2000, height: 1335)
Photo.create!(user_id: 5, title: "21", url:"https://res.cloudinary.com/megapx/image/upload/v1462145876/Seeds/21.jpg",
lat: 37.754407, lng: -122.447684, width: 2000, height: 1333)
Photo.create!(user_id: 4, title: "22", url:"https://res.cloudinary.com/megapx/image/upload/v1462145875/Seeds/22.jpg",
lat: 37.770638, lng: -122.366581, width: 2000, height: 1333)
Photo.create!(user_id: 4, title: "23", url:"https://res.cloudinary.com/megapx/image/upload/v1462145894/Seeds/23.jpg",
lat: 37.789090, lng: -122.418079, width: 2000, height: 1350)
Photo.create!(user_id: 4, title: "24", url:"https://res.cloudinary.com/megapx/image/upload/v1462145897/Seeds/24.jpg",
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
Photo.create!(user_id: 1, title: "30", url:"https://res.cloudinary.com/megapx/image/upload/v1462145926/Seeds/30.jpg",
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
