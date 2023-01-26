class CommentsController < ApplicationController

    def index 
        render json: Comment.all
    end 

    def create  
    c = Comment.create(comment_params)
    render json: c ,status: :created
    end

    def update
        c = Comment.find(params[:id])
        c.update(:message => params[:message])
        render json: p
    end 

    def destroy 
        c = Comment.find(params[:id])
        comment  = c.destroy
        render json: comment
    end 

    def post_comment
        pc = Comment.where("puzzle_id = ?", params[:puzzle_id])
        render json: pc
    end






def comment_params
    params.permit(:message, :user_id, :puzzle_id)
end 

end
