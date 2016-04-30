# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: 'albert', password: '123456', first_name: 'Albert', last_name: 'Tester')
User.create!(username: 'bob', password: '123456', first_name: 'Bob', last_name: 'Tester')
User.create!(username: 'calvin', password: '123456', first_name: 'Calvin', last_name: 'Tester')
User.create!(username: 'daniel', password: '123456', first_name: 'Daniel', last_name: 'Tester')
User.create!(username: 'tomato', password: '123456', first_name: 'Tomato', last_name: 'Yi')

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
