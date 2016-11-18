Rails.application.routes.draw do
  resources :shop_users
  resources :users
  resources :users
  resources :users
  resources :deals
  resources :shops

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'


end
