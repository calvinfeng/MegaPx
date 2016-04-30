json.array! @photos do |photo|
  json.id photo.id
  json.user_id photo.user_id
  json.title photo.title
  json.description photo.description
  json.url photo.url
  json.lat photo.lat
  json.lng photo.lng
  json.width photo.width
  json.height photo.height
end
