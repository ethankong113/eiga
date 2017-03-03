class Api::CommentsController < ApplicationController

  def index
    @comments = Book.find_by_url(params[:url]).comments
    if @comments
      render 'api/comments/index'
    else
      render json: ["Could not find matching "], status: 400
    end
  end

  def create
    @book = Book.find_by_url(book_url[:url])
    @comment = Comment.new(comment_params)
    @comment.book_id = @book.id
    if @comment.save
      render 'api/comments/show'
    elsif @book.nil?
      render json: ["Could not find matching book"], status: 400
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :time, :pos_x, :pos_y)
  end

  def book_url
    params.require(:comment).permit(:url)
  end
end
