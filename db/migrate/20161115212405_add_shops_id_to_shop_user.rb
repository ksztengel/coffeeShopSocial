class AddShopsIdToShopUser < ActiveRecord::Migration
  def change
    add_column :shop_users, :shops_id, :integer
  end
end
