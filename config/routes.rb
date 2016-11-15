Rails.application.routes.draw do
  resources :deals
  resources :shops

  root "shops#index"
end
