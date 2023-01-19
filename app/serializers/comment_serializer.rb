class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :username

  belongs_to :worldpuzzle
  belongs_to :sd
  belongs_to :threedpuzzle
  belongs_to :user


end
