Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # namespace :api, defaults: {format: JSON} do
  # end
  namespace :api, defaults: {format: :json} do
    resource :listings, only: %i[ index show create update destroy ]
    resource :user, only: %i[ show create ]
    # Create generates a new user
    # Show will show Public User info
    resource :session, only: %i[ show create destroy ]
    #Session routes will handle things such as logging in and logging out
    #Create will log in, destroy will log out, show will render a home page
  end

  root "static_pages#root"
end
