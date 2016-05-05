json.extract!(@photo, :id, :user_id, :public_id, :title, :description,
:url, :lat, :lng, :width, :height)

json.photographer(@photo.photographer, :id, :username, :first_name, :last_name, :avatar_url)
