# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: 'calvin', password: '123456', first_name: 'Calvin', last_name: 'Tester')
User.create!(username: 'tomato', password: '123456', first_name: 'Tomato', last_name: 'Yi')
User.create!(username: 'guest', password: 'password', first_name: 'Guest', last_name: 'Recruiter')

Photo.create!(title: "Spring Thaw", url: "https://c2.staticflickr.com/2/1577/25553954963_73aae906d9_k.jpg",
lat: 32.866283, lng: -117.252960, user_id: 3, width: 2048, height: 1365)

Photo.create!(title: "Starry Night", url: "https://c2.staticflickr.com/2/1681/26096642404_e60e334abc_k.jpg",
lat: 32.934024, lng: -117.257767, user_id: 1, width: 2048, height: 1365 )

Photo.create!(title: "Walk my cat", url: "https://c2.staticflickr.com/8/7107/7694767298_6c91970bbb_b.jpg",
lat: 32.870085, lng: -117.223327, user_id: 3, width: 683, height: 1024 )

Photo.create!(title: "Walk my cat", url: "https://c1.staticflickr.com/9/8158/7694749774_ec5f4fec71_b.jpg",
lat: 32.870085, lng: -117.223327, user_id: 3, width: 1024, height: 683)

Photo.create!(title: "Brunch", url: "https://c2.staticflickr.com/8/7126/7682491852_9da5f8d559_b.jpg",
lat: 32.834556, lng: -117.275448, user_id: 3, width: 1024, height: 683)

Photo.create!(title: "More Brunch", url: "https://c1.staticflickr.com/9/8289/7682490910_048eec23a5_b.jpg",
lat: 32.834556, lng: -117.275448, user_id: 3, width: 1024, height: 683)

Photo.create!(title: "Overhead Aurora", url: "https://c2.staticflickr.com/2/1548/24885041025_9fc3da7e54_k.jpg",
lat: 32.939354, lng: -117.260685, user_id: 1, width: 2048, height: 1367)

Photo.create!(title: "Sunset", url: "https://c1.staticflickr.com/9/8290/7627108730_d5022fda9c_b.jpg",
lat: 32.863543, lng: -117.239227, user_id: 3, width: 1024, height: 683)

Photo.create!(title: "Yorkshire", url: "https://c2.staticflickr.com/2/1497/26095711153_15ea3b948f_h.jpg",
lat: 32.889926, lng: -117.249527, user_id: 3, width: 1067, height: 1600)

Photo.create!(title: "Dylan", url: "https://c1.staticflickr.com/9/8146/7101284991_2070c39e20_b.jpg",
lat: 32.889926, lng: -117.249527, user_id: 3, width: 683, height: 1024)

Photo.create!(title: "Flower Field", url: "https://c2.staticflickr.com/6/5235/6913178570_4f60d158d1_b.jpg",
lat: 32.877672, lng: -117.238369, user_id: 3, width: 1024, height: 683)

Photo.create!(title: "More Flowers", url: "https://c2.staticflickr.com/8/7262/6913172012_5cb6963d8f_b.jpg",
lat: 32.877672, lng: -117.238369, user_id: 3, width: 1024, height: 683)

Photo.create!(title: "La Jolla Sunset", url: "https://c2.staticflickr.com/8/7410/16221033597_a878953969_b.jpg",
lat: 32.854603, lng: -117.258282, user_id: 3, width: 1024, height: 683)

Photo.create!(title: "Tomato the Photog", url: "https://c1.staticflickr.com/7/6070/6061863948_cfffb5f15e_b.jpg",
lat: 32.846383, lng: -117.276993, user_id: 3, width: 683, height: 1024)


# Production seed data
Photo.create!(user_id: 1, title: "1", url: "https://res.cloudinary.com/megapx/image/upload/v1462145861/Seeds/1.jpg",
lat: 37.808409, lng: -122.470737, width: 2000, height: 1337)
Photo.create!(user_id: 1, title: "2", url: "https://res.cloudinary.com/megapx/image/upload/v1462145872/Seeds/2.jpg",
lat: 37.767284, lng: -122.427950, width: 2000, height: 1335)
Photo.create!(user_id: 1, title: "3", url: "https://res.cloudinary.com/megapx/image/upload/v1462145876/Seeds/3.jpg",
lat: 37.806762, lng: -122.471380, width: 2000, height: 1335)
Photo.create!(user_id: 1, title: "4", url: "https://res.cloudinary.com/megapx/image/upload/v1462145882/Seeds/4.jpg",
lat: 37.823306, lng: -122.375937, width: 2000, height: 949)
Photo.create!(user_id: 1, title: "5", url: "https://res.cloudinary.com/megapx/image/upload/v1462145894/Seeds/5.jpg",
lat: 37.795504, lng: -122.391214, width: 2000, height: 1335)
Photo.create!(user_id: 1, title: "6", url: "https://res.cloudinary.com/megapx/image/upload/v1462145889/Seeds/6.jpg",
lat: 37.805406, lng: -122.453356, width: 2000, height: 1335)
Photo.create!(user_id: 1, title: "7", url: "https://res.cloudinary.com/megapx/image/upload/v1462145898/Seeds/7.jpg",
lat: 37.826832, lng: -122.491980, width: 2000, height: 859)
Photo.create!(user_id: 1, title: "8", url: "https://res.cloudinary.com/megapx/image/upload/v1462145917/Seeds/8.jpg",
lat: 37.741633, lng: -122.440310, width: 2000, height: 1090)
Photo.create!(user_id: 1, title: "9", url: "https://res.cloudinary.com/megapx/image/upload/v1462145897/Seeds/9.jpg",
lat: 37.807576, lng: -122.474127, width: 1024, height: 768)
Photo.create!(user_id: 1, title: "10", url: "https://res.cloudinary.com/megapx/image/upload/v1462145907/Seeds/10.jpg",
lat: 37.829951, lng: -122.488203, width: 2000, height: 839)
Photo.create!(user_id: 1, title: "11", url: "https://res.cloudinary.com/megapx/image/upload/v1462145913/Seeds/11.jpg",
lat: 37.801744, lng: -122.478590, width: 688, height: 1000)
Photo.create!(user_id: 1, title: "12", url: "https://res.cloudinary.com/megapx/image/upload/v1462145928/Seeds/12.jpg",
lat: 37.777179, lng: -122.432732, width: 2000, height: 721)
Photo.create!(user_id: 1, title: "13", url: "https://res.cloudinary.com/megapx/image/upload/v1462145931/Seeds/13.jpg",
lat: 37.786958, lng: -122.438250, width: 2000, height: 1589)
Photo.create!(user_id: 1, title: "14", url: "https://res.cloudinary.com/megapx/image/upload/v1462145923/Seeds/14.jpg",
lat: 37.802151, lng: -122.396879, width: 2000, height: 1333)
Photo.create!(user_id: 1, title: "15", url: "https://res.cloudinary.com/megapx/image/upload/v1462145936/Seeds/15.jpg",
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
