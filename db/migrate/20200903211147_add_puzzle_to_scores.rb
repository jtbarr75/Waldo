class AddPuzzleToScores < ActiveRecord::Migration[5.2]
  def change
    add_reference :scores, :puzzle, index: true
  end
end
