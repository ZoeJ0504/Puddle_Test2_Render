class ThreedpuzzlesController < ApplicationController
    
    def index
    render json: Threedpuzzle.all
    end

    def create  
        t = Threedpuzzle.create(threed_params)
        render json: t ,status: :created
    end

    def update
        t = Threedpuzzle.find(params[:id])
        t.update(:url => params[:url])
        render json: t
    end 

    def destroy 
        t = Threedpuzzle.find(params[:id])
        three = t.destroy
        render json: three
    end 


    def threed_params
        params.permit(:url, :user_id)
    end 
end
