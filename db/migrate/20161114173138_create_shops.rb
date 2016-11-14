class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.string :name
      t.text :address
      t.string :city
      t.string :state
      t.integer :zip


      t.timestamps null: false
    end
  end
end
