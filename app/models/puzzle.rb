class Puzzle < ApplicationRecord
  has_one :image, :as => :imageable
  has_many :locations
  has_many :characters, :through => :locations
end
