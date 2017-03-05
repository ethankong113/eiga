class ChangeBooks < ActiveRecord::Migration[5.0]
  def change
    add_index :books, :url, unique: true
    add_index :books, :source
    add_index :books, :media
    add_index :books, :user_id
  end
end
