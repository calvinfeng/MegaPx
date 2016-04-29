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

Photo.create!(title: "Overhead Aurora", url: "https://c2.staticflickr.com/2/1548/24885041025_9fc3da7e54_k.jpg",
  lat: -74.238863, lng: -64.335938, user_id: 3)
Photo.create!(title: "Spring Thaw", url: "https://c2.staticflickr.com/2/1577/25553954963_73aae906d9_k.jpg",
  lat: 64.069497, lng: -16.479492, user_id: 3)
Photo.create!(title: "Yorkshire", url: "https://c2.staticflickr.com/2/1497/26095711153_15ea3b948f_h.jpg",
  lat: 64.054123, lng: 20.479492, user_id: 1)
Photo.create!(title: "Starry Night", url: "https://c2.staticflickr.com/2/1681/26096642404_e60e334abc_k.jpg",
  lat: 34.023123, lng: 12.234213, user_id: 1)
