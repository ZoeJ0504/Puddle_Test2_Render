class WorldpuzzlesController < ApplicationController

    def index
        render json: Worldpuzzle.all
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

def destroy 
 w = Worldpuzzle.find(params[:id])
  riddle = w.destroy
  render json: riddle
end

    def worldpuzzle_params
        params.permit(:post, :user_id)
    end

end
