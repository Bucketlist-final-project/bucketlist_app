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
end
