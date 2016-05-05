class Api::CommentsController < ApplicationController

  def index
    photo = Photo.find_by_id(params[:photo_id])
    if photo
      @comments = photo.comments
      render :index
    else
      @errors = ["Can't find requested photo and its associated comments"]
      render "api/shared/error", status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      #Don't need to render, no one will look at one comment
    else
      @errors = @comment.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @comment = Comment.find_by_id(params[:id])
    if @comment
      @comment.destroy
    else
      @errors = ["Can't find the requested comment"]
      render "api/shared/error", status: 404
    end
  end

  def comment_params
    params.require(:comment).permit(:photo_id, :content)
  end
end
