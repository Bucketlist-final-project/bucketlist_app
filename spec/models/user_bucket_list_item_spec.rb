require 'rails_helper'

RSpec.describe UserBucketListItem, type: :model do
  
  it {should belong_to(:user)}

  it {should belong_to(:bucket_list_item)}

end
