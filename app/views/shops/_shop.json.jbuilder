json.extract! shop, :id, :name, :address, :city, :state, :zip, :created_at, :updated_at, :longitude, :latitude
json.url shop_url(shop, format: :json)
