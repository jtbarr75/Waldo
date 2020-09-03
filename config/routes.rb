Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    resources :puzzles, only: [] do
      resources :characters, only: [:show]
    end
  end
  resources :scores, only: [:index, :create]
  resources :puzzles, only: [:show]
  root 'puzzles#index'
end
