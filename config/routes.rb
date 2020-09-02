Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    resources :characters
  end
  resources :scores, only: [:index, :create]
  root 'pages#show'
end
