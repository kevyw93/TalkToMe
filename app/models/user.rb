class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  before_action :authenticate_user!
  protect_from_forgery prepend: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


end
