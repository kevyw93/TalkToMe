# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create

    @user = User.find_for_database_authentication(email: params[:user][:email])

    if @user && @user.valid_password?(params[:user][:password])
      sign_in @user
      render '/api/users/show'
    else
      render json: ["Invalid user and password combination"], status: 401
    end
  end

  # DELETE /resource/sign_out
  def destroy
    if current_user
      render json: current_user
      sign_out current_user
    else
      render json: ["Not logged in!"], status: 404
    end
  end
  #
  # protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end
end
