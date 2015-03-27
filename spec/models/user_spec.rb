require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many(:user_bucket_list_items) } 
  it { should have_many(:comments) }   
  it { should have_many(:item_completes) } 
end
