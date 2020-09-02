class Character < ApplicationRecord
  validates :name, presence: true
  validates :xpos, presence: true
  validates :ypos, presence: true
  has_one :image, :as => :imageable
end
