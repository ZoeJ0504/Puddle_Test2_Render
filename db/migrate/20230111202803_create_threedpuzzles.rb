class CreateThreedpuzzles < ActiveRecord::Migration[7.0]
  def change
    create_table :threedpuzzles do |t|
      t.string :url 
      t.integer :user_id
      
      t.timestamps
    end
  end
end
