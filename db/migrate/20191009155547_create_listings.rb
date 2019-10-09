class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :host_id, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.float :price, null: false
      t.integer :guests, null: false
      t.integer :benches, null: false
      t.integer :power_rack, null: false
      t.integer :deadlift_platform, null: false

      t.timestamps
    end
    add_index :listings, :host_id
    add_index :listings, :location, unique: true
  end
end
