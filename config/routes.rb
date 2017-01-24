Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :books, only: [:create, :update, :destroy]
    get 'book/:url', to: 'books#find_by_url'
  end

  root "static_pages#root"
end
