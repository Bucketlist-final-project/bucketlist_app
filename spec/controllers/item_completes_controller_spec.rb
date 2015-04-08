require 'rails_helper'

RSpec.describe ItemCompletesController, type: :controller do

  let!(:bucket_list_item) { FactoryGirl.create(:bucket_list_item) }
  let!(:user) { FactoryGirl.create(:user) }

  describe "GET #index" do
    it "should return all item_completes" do
      p user.item_completes
      xhr :get, :index, user_id: user.id
      expect(assigns(:item_completes).class).to eq(ItemComplete::ActiveRecord_AssociationRelation)
    end
  end

    #Need to figure out how to run this SPEC
    describe "POST #create" do
    # it "should return create an item_complete" do
    #   xhr :post, :create, user_id: user.id, item_complete: { completed: true, user_id: user.id, bucket_list_item_id: bucket_list_item.id }
    #   expect(assigns(:item_complete).class).to eq('')
    # end
  end


end
