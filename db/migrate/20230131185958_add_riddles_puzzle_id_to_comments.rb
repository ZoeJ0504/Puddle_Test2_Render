class AddRiddlesPuzzleIdToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :riddles_puzzle_id, :integer
  end
end
