#fuctionality removed
# require 'rails_helper'

# RSpec.describe InterestsController, type: :controller do

#   let!(:interest) { FactoryGirl.create(:interest) }
#   let!(:user) { FactoryGirl.create(:user) }

#   describe "GET #index" do

#     it "should return all interest objects" do
#       xhr :get, :index
#       expect(assigns(:interests)).not_to eq(nil)
#       expect(assigns(:interests).length).to eq(1)
#       expect(assigns(:interests)).to include(interest)
#     end

#   end

#   describe "GET #show" do
#     it "should return a specific interest object" do
#       xhr :get, :show, id: interest
#       expect(assigns(:interest)).to eq(interest)
#     end

#     it "should return all user objects under the interest" do
#       xhr :get, :show, id: interest
#       expect(assigns(:users).class).to eq(User::ActiveRecord_Associations_CollectionProxy)
#     end
#   end

#   describe "GET #new" do
#     it "should initialize new interest object" do
#       xhr :get, :new
#       expect(assigns(:interest).new_record?).to eq(true)
#       expect(assigns(:interest).class).to eq(Interest)
#     end

#     it "should assign all user objects" do
#       xhr :get, :new
#       expect(assigns(:users).class).to eq(User::ActiveRecord_Relation)
#     end
#   end

#   describe "POST #create" do
#     it "should create an interest object successfully" do
#       xhr :post, :create, interest: { name: 'test' }
#       expect(assigns(:interest).class).to eq(Interest)
#       expect(assigns(:interest)).not_to be_new_record
#       expect(assigns(:interest).persisted?).to eq(true)
#       # expect(assigns(:users).class).to eq(true)
#     end

#     it 'should create an interest object unsuccessfully' do
#       xhr :post, :create, interest: { name: '' }
#       expect(assigns(:interest).class).to eq(Interest)
#       expect(assigns(:interest)).to be_new_record
#     end
#   end

#   describe "GET #edit" do
#     it "should return a specfic interest object" do
#       xhr :get, :edit, id: interest
#       expect(assigns(:interest)).to eq(interest)
#       expect(assigns(:users).class).to eq(User::ActiveRecord_Relation)
#     end
#   end

#   describe "PATCH #update" do
#     it "should edit an interest object successfully" do
#       xhr :patch, :update, id: interest, interest: { name: 'Updated Name' }
#       expect(assigns(:interest)).to eq(interest)
#       expect(assigns(:interest).name).to eq('Updated Name')
#       # expect(assigns(:users).class).to eq(true)
#     end

#     it "should edit an interest object unsuccessfully" do
#       xhr :patch, :update, id: interest, interest: { name: '' }
#       expect(assigns(:interest)).to eq(interest)
#       expect(assigns(:interest).errors.full_messages).to eq(["Name can't be blank"])
#     end
#   end

#   describe "DELETE #destroy" do
#     it "should delete an interest object successfully" do
#       expect{
#         xhr :delete, :destroy, id: interest
#       }.to change(Interest, :count).by(-1)
#     end
#   end

# end
