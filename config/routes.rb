Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope 'api' do
    resources :users, only: :create
    resources :sessions, only: %w(create destroy)
    resources :web_surveys, path: 'surveys'
  end
end
