class Comment < ActiveRecord::Base
  validates :user_id, :photo_id, :content, presence: true

  belongs_to :author,
  foreign_key: :user_id,
  class_name: "User"

  belongs_to :photo,
  foreign_key: :photo_id,
  class_name: "Photo"
end
