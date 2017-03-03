class Comment < ApplicationRecord
  validates :book_id, presence: true
  validates :body, :time, :pos_x, :pos_y, length: {minimum: 1}

  belongs_to :book

end
