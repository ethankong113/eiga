class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :url, null: false
      t.string :source, null: false
      t.string :media, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
