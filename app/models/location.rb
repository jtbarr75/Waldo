class Location < ApplicationRecord
  belongs_to :character
  belongs_to :puzzle
end
