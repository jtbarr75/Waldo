Rails.application.routes.draw do
  get 'scores/index'
  get 'scores/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    resources :characters
    resources :scores, only: [:index, :create]
  end
  root 'pages#show'
end
