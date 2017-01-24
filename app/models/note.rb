class Note < ApplicationRecord
  validates :book_id, :playtime, :timespan, :position_x, :position_y, :body, presence: true

  belongs_to :book
end
