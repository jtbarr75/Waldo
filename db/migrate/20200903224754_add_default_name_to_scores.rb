class AddDefaultNameToScores < ActiveRecord::Migration[5.2]
  def change
    change_column :scores, :name, :string, :default => "Anonymous Waldo Watcher"
  end
end
