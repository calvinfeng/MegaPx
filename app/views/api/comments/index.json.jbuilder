json.array! @comments do |comment|
  json.id comment.id
  json.content comment.content
  json.author comment.author
end
