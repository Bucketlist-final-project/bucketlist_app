class AddAttachmentImageToBucketListItems < ActiveRecord::Migration
  def self.up
    change_table :bucket_list_items do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :bucket_list_items, :image
  end
end
