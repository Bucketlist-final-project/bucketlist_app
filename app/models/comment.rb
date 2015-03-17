class Comment < ActiveRecord::Base

  belongs_to :user
  belongs_to :bucket_list_item
  validates :content, presence: true


end
