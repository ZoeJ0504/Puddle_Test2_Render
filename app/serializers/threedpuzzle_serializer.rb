class ThreedpuzzleSerializer < ActiveModel::Serializer
  attributes :id, :url, :user_id

  belongs_to :user
  
  has_many :comments
end
