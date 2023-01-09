class WorldpuzzlesController < ApplicationController

    def index
        w = Wordpuzzle.all
        render json: w
    end

    def create  
        r = Wordpuzzle.create(wordpuzzle_params)
        render json: r ,status: :created
    end

    def update
        p = Wordpuzzle.find(params[:id])
        p.update(:post => params[:post])
        render json: p
    end



    def wordpuzzle_params
        params.permit(:post, :user_id)
    end
    
end
