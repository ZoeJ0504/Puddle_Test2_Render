class AddSdIdToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :sd_id, :integer
  end
end
