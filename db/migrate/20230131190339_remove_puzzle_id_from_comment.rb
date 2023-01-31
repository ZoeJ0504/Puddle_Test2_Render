class RemovePuzzleIdFromComment < ActiveRecord::Migration[7.0]
  def change
    remove_column :comments, :puzzle_id, :integer
  end
end
