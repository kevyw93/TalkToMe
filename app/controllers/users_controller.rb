class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save!
      sign_in(@user)
    else
      render json: @user.errors.messages, status: 406
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end



end
