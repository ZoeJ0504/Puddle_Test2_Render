class AddSpotTheDifferencePuzzleId < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :sd_puzzle_id, :integer 
  end
end
