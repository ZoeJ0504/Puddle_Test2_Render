class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :worldpuzzle_id, :threedpuzzle_id, :sd_id


  belongs_to :user, serializer: UserSerializer

  belongs_to :worldpuzzle, optional:true
  belongs_to :threedpuzzle, optional:true
  belongs_to :sd, optional:true


end
