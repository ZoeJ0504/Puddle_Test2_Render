class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :puzzle_id


  belongs_to :user


end
