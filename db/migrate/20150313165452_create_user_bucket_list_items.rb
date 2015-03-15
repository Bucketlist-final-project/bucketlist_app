class CreateUserBucketListItems < ActiveRecord::Migration
  def change
    create_table :user_bucket_list_items do |t|
      t.integer :user_id
      t.integer :bucket_list_item_id

      t.timestamps null: false
    end
  end
end
