class BucketListItem < ActiveRecord::Base

  has_many :user_bucket_list_items
  has_many :users, through: :user_bucket_list_items
  has_many :comments
  has_many :item_completes

  # validates :name, presence: true
  # validates :description, presence: true
  # validates :street_address, presence: true
  # validates :city, presence: true
  # validates :state, presence: true
  # validates :zip_code, presence: true

  aws_keys = if ['development', 'test'].include?(Rails.env)
    "#{Rails.root}/config/aws-keys.yml"
  else
    {
      bucket: ENV['S3_BUCKET_NAME'],
      access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      secret_access_key: ENV['AWS_SECRET_ACCESS_KEY']
    }
  end
  has_attached_file :image,
   :styles => { :medium => "300x300>", :thumb => "100x100>" },
   :default_url => "/images/:style/missing.png",
   storage: :s3,
   s3_credentials: aws_keys,
   s3_permissions: 'authenticated-read',
   path: "items/:basename.:extension",
   s3_server_side_encryption: :aes256
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  def s3_url(style=nil, expires_in=30.minutes)
    image.s3_object(style).url_for(:read, secure: true, expires: expires_in).to_s
  end

  def as_json(options={})
      super(:only => [:name, :description, :city, :state, :zip_code, :image_file_name, :id, :user_id, :bucket_list_item_id, :latitude, :longitude, :street_address],
            :include => {
              :comments => {:only => [:id, :content, :user_id, :bucket_list_item_id,],
              :include => {:user => {:only => [:first_name, :last_name, :email]}} }
      })
  end



end
