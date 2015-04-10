require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  let!(:user) { FactoryGirl.create(:user) }
  let!(:bucket_list_item) { FactoryGirl.create(:bucket_list_item) }

 #  describe "GET #index" do
 #    it "returns all user objects" do
 #      p User.all
 #      xhr :get, :index
 #      expect(assigns(:users)).not_to eq(nil)
 #      expect(assigns(:users).length).to eq(1)
 #      expect(assigns(:users)).to include(user)
 #    end
 #  end

 # describe "GET #show" do
 #    it "should return a specific user object" do
 #      xhr :get, :show, id: user
 #      expect(assigns(:user)).to eq(user)
 #    end
 #  end

 #  describe "PATCH #update" do
 #    it "should edit an user object successfully" do
 #      xhr :patch, :update, id: user, user: { bucket_list_item_ids: [bucket_list_item.id] }
 #      expect(assigns(:user)).to eq(user)
 #      expect(assigns(:user).bucket_list_item_ids).to eq([bucket_list_item.id])
 #    end
 #  end

end
