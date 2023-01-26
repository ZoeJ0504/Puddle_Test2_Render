class AddPuzzleIdToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :puzzle_id, :integer
  end
end
