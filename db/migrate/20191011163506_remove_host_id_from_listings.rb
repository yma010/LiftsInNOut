class RemoveHostIdFromListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :host_id, :integer
  end
end
