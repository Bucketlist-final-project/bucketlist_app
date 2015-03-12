class BucketListItem < ActiveRecord::Base

  validates :name, presence: true
  validates :description, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip_code, presence: true


end

