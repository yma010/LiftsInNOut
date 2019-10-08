class Api::UsersController < ApplicationController
  def show
    render 'api/users/show'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_message, status: 422
    end
  end

  private

  def user_params
    permits = %i[ fname lname email password ]

    params.require(:user).permit(*permits)
  end
end
