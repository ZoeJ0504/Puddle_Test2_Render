class SdsController < ApplicationController
    def index 
        render json: Sd.all
    end

    def create  
        s = Sd.create(sd_params)
        render json: s ,status: :created
    end

    def update
        s = Sd.find(params[:id])
        s.update(:url => params[:url])
        render json: s
    end 

    def destroy 
        s = Sd.find(params[:id])
        spot = s.destroy
        render json: spot
    end 


    def sd_params
        params.permit(:url, :user_id)
    end 

end
