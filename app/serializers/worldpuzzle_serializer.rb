class WorldpuzzleSerializer < ActiveModel::Serializer
  attributes :id, :post, :user_id 

  has_many :users
  
end
