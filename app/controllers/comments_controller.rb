class CommentsController < ApplicationController

    def index 
        render json: Comment.all
    end 

    def create  
    c = Comment.create!(comment_params)
    render json: c ,status: :created
    end

    def update
        c = Comment.find(params[:id])
        c.update(:message => params[:message])
        render json: c
    end 

    def destroy 
        c = Comment.find(params[:id])
        comment  = c.destroy
        render json: comment
    end 

    def post_threedpuzzle
        pc = Comment.where("threedpuzzle_id = ?", params[:threedpuzzle_id])
        render json: pc
    end

    def post_sd
        pc = Comment.where("sd_id = ?", params[:sd_id])
        render json: pc
    end

    def post_riddle
        pc = Comment.where("worldpuzzle_id = ?", params[:worldpuzzle_id])
        render json: pc
    end





def comment_params
    params.permit(:message, :user_id, :worldpuzzle_id, :threedpuzzle_id, :sd_id)
end 

end
