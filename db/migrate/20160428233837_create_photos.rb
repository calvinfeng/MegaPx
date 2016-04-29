class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.string :url, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :title, :default => "Untitled"
      t.text :description
      t.timestamps null: false
    end

    add_index :photos, :lat
    add_index :photos, :lng
    add_index :photos, :user_id
  end
end
