json.users do
  debugger
  @user.each do |user|

    json.extract! user, :id, :email
  end
end
