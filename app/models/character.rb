class Character < ApplicationRecord
  validates :name, presence: true
  has_one :image, :as => :imageable
  has_many :locations
  has_many :puzzles, :through => :locations

  def location_in_puzzle(id)
    return self.locations.where(puzzle_id: id)[0]
  end
end
