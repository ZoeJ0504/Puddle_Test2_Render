class WorldpuzzlesController < ApplicationController

    def index
        w = Worldpuzzle.all
        render json: w
    end

    def create  
        r = Worldpuzzle.create(worldpuzzle_params)
        render json: r ,status: :created
    end

    def update
        p = Worldpuzzle.find(params[:id])
        p.update(:post => params[:post])
        render json: p
    end



    def worldpuzzle_params
        params.permit(:post, :user_id)
    end

end
