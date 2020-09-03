class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.belongs_to :character, foreign_key: true
      t.belongs_to :puzzle, foreign_key: true
      t.integer :xpos
      t.integer :ypos

      t.timestamps
    end
  end
end
