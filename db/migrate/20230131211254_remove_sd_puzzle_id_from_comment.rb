class RemoveSdPuzzleIdFromComment < ActiveRecord::Migration[7.0]
  def change
    remove_column :comments, :sd_puzzle_id, :integer
  end
end
