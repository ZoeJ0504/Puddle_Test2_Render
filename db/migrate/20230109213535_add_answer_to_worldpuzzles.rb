class AddAnswerToWorldpuzzles < ActiveRecord::Migration[7.0]
  def change
    add_column :worldpuzzles, :answer, :string
  end
end
