class AddWidthAndHeightToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :width, :integer
    add_column :photos, :height, :integer
  end
end
