class CreateShopUsers < ActiveRecord::Migration
  def change
    create_table :shop_users do |t|
      t.string :name
      t.string :email
      t.string :password_hash
      t.string :password_salt
      t.string :logoUrl

      t.timestamps null: false
    end
  end
end
