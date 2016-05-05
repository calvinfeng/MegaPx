# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: 'calvin', password: '123456', first_name: 'Calvin', last_name: 'Feng',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462399141/Profile/admin.jpg")
User.create!(username: 'tomato', password: '123456', first_name: 'Tomato', last_name: 'Yi',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462399285/Profile/tomato.jpg")
User.create!(username: 'guest', password: 'password', first_name: 'Guest', last_name: 'Recruiter',
avatar_url: "https://res.cloudinary.com/megapx/image/upload/v1462400515/Profile/avatar.png")

# Development/Test seed data


# Production seed data
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
Photo.create!(user_id: 3, title: "6", url: "https://res.cloudinary.com/megapx/image/upload/v1462145889/Seeds/6.jpg",
lat: 37.805406, lng: -122.453356, width: 2000, height: 1335)
Photo.create!(user_id: 3, title: "7", url: "https://res.cloudinary.com/megapx/image/upload/v1462145898/Seeds/7.jpg",
lat: 37.826832, lng: -122.491980, width: 2000, height: 859)
Photo.create!(user_id: 3, title: "8", url: "https://res.cloudinary.com/megapx/image/upload/v1462145917/Seeds/8.jpg",
lat: 37.741633, lng: -122.440310, width: 2000, height: 1090)
Photo.create!(user_id: 3, title: "9", url: "https://res.cloudinary.com/megapx/image/upload/v1462145897/Seeds/9.jpg",
lat: 37.807576, lng: -122.474127, width: 1024, height: 768)
Photo.create!(user_id: 3, title: "10", url: "https://res.cloudinary.com/megapx/image/upload/v1462145907/Seeds/10.jpg",
lat: 37.829951, lng: -122.488203, width: 2000, height: 839)
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
Photo.create!(user_id: 1, title: "16", url: "https://res.cloudinary.com/megapx/image/upload/v1462145862/Seeds/16.jpg",
lat: 37.794210, lng: -122.404325, width: 2000, height: 1359)
Photo.create!(user_id: 1, title: "17", url: "https://res.cloudinary.com/megapx/image/upload/v1462145865/Seeds/17.jpg",
lat: 37.792403, lng: -122.458463, width: 2000, height: 1297)
Photo.create!(user_id: 1, title: "18", url: "https://res.cloudinary.com/megapx/image/upload/v1462145864/Seeds/18.jpg",
lat: 37.747198, lng: -122.438593, width: 2000, height: 1336)
Photo.create!(user_id: 1, title: "19", url: "https://res.cloudinary.com/megapx/image/upload/v1462145860/Seeds/19.jpg",
lat: 37.790485, lng: -122.390184, width: 2000, height: 1333)
Photo.create!(user_id: 1, title: "20", url: "https://res.cloudinary.com/megapx/image/upload/v1462145863/Seeds/20.jpg",
lat: 37.795640, lng: -122.481508, width: 2000, height: 1335)
Photo.create!(user_id: 1, title: "21", url:"https://res.cloudinary.com/megapx/image/upload/v1462145876/Seeds/21.jpg",
lat: 37.754407, lng: -122.447684, width: 2000, height: 1333)
Photo.create!(user_id: 1, title: "22", url:"https://res.cloudinary.com/megapx/image/upload/v1462145875/Seeds/22.jpg",
lat: 37.770638, lng: -122.366581, width: 2000, height: 1333)
Photo.create!(user_id: 1, title: "23", url:"https://res.cloudinary.com/megapx/image/upload/v1462145894/Seeds/23.jpg",
lat: 37.789090, lng: -122.418079, width: 2000, height: 1350)
Photo.create!(user_id: 1, title: "24", url:"https://res.cloudinary.com/megapx/image/upload/v1462145897/Seeds/24.jpg",
lat: 37.789090, lng: -122.411556, width: 2000, height: 1328)
Photo.create!(user_id: 1, title: "25", url:"https://res.cloudinary.com/megapx/image/upload/v1462145884/Seeds/25.jpg",
lat: 37.797445, lng: -122.401116, width: 2000, height: 1250)
Photo.create!(user_id: 1, title: "26", url:"https://res.cloudinary.com/megapx/image/upload/v1462145899/Seeds/26.jpg",
lat: 37.793265, lng: -122.403413, width: 2000, height: 1335)
Photo.create!(user_id: 1, title: "27", url:"https://res.cloudinary.com/megapx/image/upload/v1462145907/Seeds/27.jpg",
lat: 37.778648, lng: -122.387635, width: 2000, height: 1265)
Photo.create!(user_id: 1, title: "28", url:"https://res.cloudinary.com/megapx/image/upload/v1462145907/Seeds/28.jpg",
lat: 37.787115, lng: -122.385029, width: 2000, height: 1125)
Photo.create!(user_id: 1, title: "29", url:"https://res.cloudinary.com/megapx/image/upload/v1462145904/Seeds/29.jpg",
lat: 37.795983, lng: -122.404131, width: 662, height: 1000)
Photo.create!(user_id: 1, title: "30", url:"https://res.cloudinary.com/megapx/image/upload/v1462145926/Seeds/30.jpg",
lat: 37.769063, lng: -122.439160, width: 2000, height: 1114)
