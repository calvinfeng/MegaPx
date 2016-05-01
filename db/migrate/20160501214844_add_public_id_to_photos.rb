class AddPublicIdToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :public_id, :string
  end
end
