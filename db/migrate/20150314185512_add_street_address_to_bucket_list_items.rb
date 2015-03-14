class AddStreetAddressToBucketListItems < ActiveRecord::Migration
  def change
    add_column :bucket_list_items, :street_address, :string
  end
end
