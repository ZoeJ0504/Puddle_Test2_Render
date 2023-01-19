class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

    has_many :worldpuzzles
    has_many :sds
    has_many :threedpuzzles
    has_many :comments

end
