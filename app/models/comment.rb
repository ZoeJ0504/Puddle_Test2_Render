class Comment < ApplicationRecord
    

    belongs_to :user
    belongs_to :worldpuzzle, optional:true
    belongs_to :threedpuzzle, optional:true
    belongs_to :sd, optional:true
end
