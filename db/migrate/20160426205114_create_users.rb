class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name, :default => "First Name"
      t.string :last_name, :default => "Last Name"
      t.timestamps null: false
    end

    add_index :users, :username, unique: true
    add_index :users, :session_token
  end
end
