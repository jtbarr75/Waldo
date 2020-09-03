Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    resources :puzzles, only: [] do
      resources :characters, only: [:show]
    end
  end
  resources :puzzles, only: [:show] do 
    resources :scores, only: [:index, :create]
  end
  root 'puzzles#index'
end
