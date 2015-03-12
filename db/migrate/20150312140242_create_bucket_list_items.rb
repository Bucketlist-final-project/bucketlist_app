class CreateBucketListItems < ActiveRecord::Migration
  def change
    create_table :bucket_list_items do |t|
      t.string :name
      t.text :description
      t.string :city
      t.string :state
      t.string :zip_code

      t.timestamps null: false
    end
  end
end
