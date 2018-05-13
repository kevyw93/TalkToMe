@users.each do |user|
  json.set! user.id do
    json.email user.email
  end
end
#     json.extract! user, :id, :email
#   end
# end
