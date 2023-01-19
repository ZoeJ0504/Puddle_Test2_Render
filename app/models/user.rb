class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true
    
    has_many :worldpuzzles
    has_many :sds
    has_many :threedpuzzles
    has_many :comments
end
