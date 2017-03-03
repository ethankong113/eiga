Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :books, only: [:create, :update, :destroy]
    get 'books/:url', to: 'books#find_by_url'

    resources :comments, only: [:create, :update, :destroy]
    get 'books/:url/comments', to: 'comments#index'
  end

  root "static_pages#root"
end
