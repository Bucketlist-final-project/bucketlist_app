class CreateItemCompletes < ActiveRecord::Migration
  def change
    create_table :item_completes do |t|
      t.boolean :completed
      t.integer :user_id
      t.integer :bucket_list_item_id

      t.timestamps null: false
    end
  end
end
