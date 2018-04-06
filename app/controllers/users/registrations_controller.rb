class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_permitted_parameters, only: [:create]
  def create
    debugger
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
    else
      render json: @user.errors.messages, status: 406
    end
  end

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password])
  end

  def user_params
    params.require(:users).permit(:email, :password)
  end



end
