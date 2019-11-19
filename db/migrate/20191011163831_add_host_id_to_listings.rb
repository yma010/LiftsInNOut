class AddHostIdToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :host_id, :integer, null:false
    add_index :listings, :host_id
  end
end
