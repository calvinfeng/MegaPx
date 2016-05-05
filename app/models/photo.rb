class Photo < ActiveRecord::Base
  validates :user_id, presence: true
  validates :lat, presence: true
  validates :lng, presence: true
  validates :url, presence: true

  belongs_to :photographer,
  foreign_key: :user_id,
  class_name: "User"

  has_many :comments,
  foreign_key: :photo_id,
  class_name: "Comment"

  def self.in_bounds(bounds)
    # format
    # {
    #   "northEast" => {"lat" => number, "lng" => number},
    #   "southWest" => {"lat" => number, "lng" => number}
    # }
    north_bound = bounds["northEast"]["lat"].to_f
    east_bound = bounds["northEast"]["lng"].to_f
    south_bound = bounds["southWest"]["lat"].to_f
    west_bound = bounds["southWest"]["lng"].to_f
    Photo.where(lat: south_bound..north_bound).where(lng: west_bound..east_bound)
  end
end
