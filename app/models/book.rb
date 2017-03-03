class Book < ApplicationRecord
  validates :url, :source, :media, :user_id, presence: true
  validates :url, uniqueness: true
  after_initialize :create_url, :ensure_type, :ensure_user_id

  has_many :comments

  def create_url
    if self.url.nil? || self.url == ""
      new_url = Book.generate_random_url
      until Book.find_by_url(new_url).nil?
        new_url = Book.generate_random_url
      end
      self.url = new_url
    end
  end

  def ensure_type
    self.media = "youtube" if self.media.nil? || self.media == ""
  end

  def ensure_user_id
    self.user_id = 0 if self.user_id.nil?
  end

  def self.generate_random_url
    digits = ("0".."9").to_a.concat(('a'..'z').to_a.concat(('A'..'Z').to_a))
    len = digits.length
    new_url = Array.new(6)
    new_url.each_index {|idx| new_url[idx] = digits[rand(0...len)]}.join("")
  end
end
