Rails.application.routes.draw do
  resources :messages
  devise_for :users, controllers:{
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
