class RemoveRiddlePuzzleIdFromComment < ActiveRecord::Migration[7.0]
  def change
    remove_column :comments, :riddles_puzzle_id, :integer
  end
end
