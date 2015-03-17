require 'rails_helper'

RSpec.describe Comment, type: :model do
    
  it { should belong_to(:user) }    

  it { should belong_to(:bucket_list_item) }

  it { should validate_presence_of(:content) }
end
