class AddWorldpuzzleIdToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :worldpuzzle_id, :integer
  end
end
