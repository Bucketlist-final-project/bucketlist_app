class Comment < ActiveRecord::Base

  belongs_to :user
  belongs_to :bucket_list_item
  validates :content, presence: true

def as_json(options={})
      super(:only => [:id, :content, :user_id, :bucket_list_item_id, :created_at],
        :include => {
              :user => {:only => [:id, :first_name, :last_name]
              }}
              )
end


end
