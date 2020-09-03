class Score < ApplicationRecord
  validates :time, presence: true
  belongs_to :puzzle
end
