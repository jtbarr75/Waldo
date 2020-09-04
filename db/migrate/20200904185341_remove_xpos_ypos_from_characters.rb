class RemoveXposYposFromCharacters < ActiveRecord::Migration[5.2]
  def change
    remove_column :characters, :xpos
    remove_column :characters, :ypos
  end
end
