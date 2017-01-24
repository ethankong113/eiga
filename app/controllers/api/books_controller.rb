class Api::BooksController < ApplicationController
  def create
    @book = Book.new(book_params)
    if @book.save
      render 'api/books/show'
    else
      render json: @book.errors.full_messages, status: 400
    end
  end

  def find_by_url
    @book = Book.find_by_url(params[:url])
    if @book
      render 'api/books/show'
    else
      render json: ["Could not find book"], status: 404
    end
  end

  private
  def book_params
    params.require(:source).permit(:source)
  end
end
