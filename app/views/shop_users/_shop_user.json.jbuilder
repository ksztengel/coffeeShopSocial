json.extract! shop_user, :id, :name, :email, :password_hash, :password_salt, :created_at, :updated_at
json.url shop_user_url(shop_user, format: :json)