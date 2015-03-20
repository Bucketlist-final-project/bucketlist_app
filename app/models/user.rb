class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :user_bucket_list_items
  has_many :bucket_list_items, through: :user_bucket_list_items

  has_many :user_interests
  has_many :interests, through: :user_interests

  has_many :comments

  has_many :item_completes

  def as_json(options={})
  super(:only => [:first_name,:last_name, :id],
        :include => {
          :bucket_list_items => {:only => [:id, :name, :image_file_name, :latitude, :longitude]},
          :item_completes => {:only => [:completed]}
        }
  )
end



end
