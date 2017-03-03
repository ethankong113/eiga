class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.string :time, null: false
      t.string :pos_x, null: false
      t.string :pos_y, null: false
      t.integer :book_id, null: false
      t.timestamps null: false
    end
  end
end
