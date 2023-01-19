class Comment < ApplicationRecord
    belongs_to :worldpuzzle
    belongs_to :sd
    belongs_to :threedpuzzle
    belongs_to :user

end
