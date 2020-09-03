class AddDifficultyToPuzzles < ActiveRecord::Migration[5.2]
  def change
    add_column :puzzles, :difficulty, :string
  end
end
