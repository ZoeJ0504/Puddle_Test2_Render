class WorldpuzzleSerializer < ActiveModel::Serializer
  attributes :id, :post, :user_id

  belongs_to :user
  
  has_many :comments



end
