class AddLatitudeAndLongitudeToBucketListItems < ActiveRecord::Migration
  def change
    add_column :bucket_list_items, :latitude, :float
    add_column :bucket_list_items, :longitude, :float
  end
end
