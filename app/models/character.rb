class Character < ApplicationRecord
  validates :name, presence: true
  validates :xpos, presence: true
  validates :ypos, presence: true
end
