class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.text :body, null: false
      t.string :playtime, null: false
      t.string :timespan, null: false
      t.integer :position_x, null: false
      t.integer :position_y, null: false
      t.integer :book_id, null: false
      t.timestamps null: false
    end
  end
end
