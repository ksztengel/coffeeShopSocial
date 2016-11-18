class RenameColumnShopsIdToShopId < ActiveRecord::Migration
  def change
    rename_column :shop_users, :shops_id, :shop_id
  end
end
