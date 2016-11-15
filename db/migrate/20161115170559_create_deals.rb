class CreateDeals < ActiveRecord::Migration
  def change
    create_table :deals do |t|
      t.string :title
      t.text :description
      t.text :description
      t.string :imgUrl
      t.integer :shops_id

      t.timestamps null: false
    end
  end
end
