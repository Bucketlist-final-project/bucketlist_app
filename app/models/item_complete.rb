class ItemComplete < ActiveRecord::Base

  belongs_to :user
  belongs_to :bucket_list_item

end
