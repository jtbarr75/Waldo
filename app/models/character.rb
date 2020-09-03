class Character < ApplicationRecord
  validates :name, presence: true
  validates :xpos, presence: true
  validates :ypos, presence: true
  has_one :image, :as => :imageable
  has_many :puzzles, :through => :locations
  has_many :locations
end
