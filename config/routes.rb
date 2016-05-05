Rails.application.routes.draw do

  root to: "static_pages#root"
  get 'api/user/photos', :to => 'api/photos#current_user_photos'
  namespace :api, defaults: {format: :json} do
    resource :user, only:[:create]
    resource :session, only:[:create, :destroy, :show]
    resources :photos, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :destroy]
  end

end
