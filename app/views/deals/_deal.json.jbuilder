json.extract! deal, :id, :title, :description, :description, :imgUrl, :shop_id, :created_at, :updated_at
json.latitude deal.shop.latitude
json.longitude deal.shop.longitude
json.name deal.shop.name

json.url deal_url(deal, format: :json)
