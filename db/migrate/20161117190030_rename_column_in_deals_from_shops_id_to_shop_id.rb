class RenameColumnInDealsFromShopsIdToShopId < ActiveRecord::Migration
  def change
    rename_column :deals, :shops_id, :shop_id
  end
end
