Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :threedpuzzles
  resources :sds
  resources :wordpuzzles
  resources :users
  resources :sessions, only: [:create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"

  get "/users/:id", to: "users#show_id"

  get "/wordpuzzle", to: "worldpuzzles#index"
  post "/rpost", to: "worldpuzzles#create"
  delete "/worldpuzzleremove/:id", to: "worldpuzzles#destroy"
  patch "/worldpuzzleupdate/:id", to: "worldpuzzles#update" 
  
end
