class Puzzle < ApplicationRecord
  has_one :image, :as => :imageable
  has_many :scores
  has_many :locations
  has_many :characters, :through => :locations

  def num_characters
    return self.characters.length
  end

  def small_image_name
    return "small-#{self.image.name}"
  end
end
