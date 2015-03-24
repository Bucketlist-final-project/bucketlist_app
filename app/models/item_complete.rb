class ItemComplete < ActiveRecord::Base

  belongs_to :user
  belongs_to :bucket_list_item

  def as_json(options={})
    super(:only => [:id, :user_id, :bucket_list_item_id],
          :include => {
            :bucket_list_item => {:only => [:id, :name, :image_file_name, :latitude, :longitude]}
          }
          )
    end

end
