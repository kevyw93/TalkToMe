class Users::SessionsController < Devise::SessionsController

  def create
      @user = User.find(email: params[:user][:email])
      errors = {}
      password = User.find(params[:user][:password])
      debugger
      if @user && @user.valid_password?(password)
        sign_in(@user)
      else
        errors[login_error: 'Invalid username and password combo']
      end
  end

  def destroy
    if logged_in?
      sign_out
    end
  end

end
