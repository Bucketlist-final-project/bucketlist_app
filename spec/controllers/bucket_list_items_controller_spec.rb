require 'rails_helper'

RSpec.describe BucketListItemsController, type: :controller do

  let!(:bucket_list_item) { FactoryGirl.create(:bucket_list_item) }

  describe "GET #index" do
    it "should return all bucket_list_items objects" do
      xhr :get, :index
      expect(assigns(:bucket_list_items)).not_to eq(nil)
      expect(assigns(:bucket_list_items).length).to eq(1)
      expect(assigns(:bucket_list_items)).to include(bucket_list_item)
    end
  end

  describe "GET #show" do
    it "should return a specific bucket_list_item object" do
      xhr :get, :show, id: bucket_list_item
      expect(assigns(:bucket_list_item)).to eq(bucket_list_item)
    end
  end

  describe "GET #new" do
    it "should initialize new item object" do
      xhr :get, :new
      expect(assigns(:bucket_list_item).new_record?).to eq(true)
      expect(assigns(:bucket_list_item).class).to eq(BucketListItem)
    end
  end

  describe "POST #create" do
    it "should create an bucket_list_item object successfully" do
      xhr :post, :create, bucket_list_item: { name: 'test', description: 'test', city: 'test', state: 'test', zip_code: '22222' }
      expect(assigns(:bucket_list_item).class).to eq(BucketListItem)
      expect(assigns(:bucket_list_item)).not_to be_new_record
      expect(assigns(:bucket_list_item).persisted?).to eq(true)
    end

    it 'should create an bucket_list_item object unsuccessfully' do
      xhr :post, :create, bucket_list_item: { name: '' }
      expect(assigns(:bucket_list_item).class).to eq(BucketListItem)
      expect(assigns(:bucket_list_item)).to be_new_record
    end
  end

  describe "GET #edit" do
    it "should return a specfic bucket_list_item object" do
      xhr :get, :edit, id: bucket_list_item
      expect(assigns(:bucket_list_item)).to eq(bucket_list_item)
    end
  end

  describe "PATCH #update" do
    it "should edit an bucket_list_item object successfully" do
      xhr :patch, :update, id: bucket_list_item, bucket_list_item: { name: 'Updated Name' }
      expect(assigns(:bucket_list_item)).to eq(bucket_list_item)
      expect(assigns(:bucket_list_item).name).to eq('Updated Name')
    end

    it "should edit an bucket_list_item object unsuccessfully" do
      xhr :patch, :update, id: bucket_list_item, bucket_list_item: { name: '' }
      expect(assigns(:bucket_list_item)).to eq(bucket_list_item)
      expect(assigns(:bucket_list_item).errors.full_messages).to eq(["Name can't be blank"])
    end
  end

  describe "DELETE #destroy" do
    it "should delete an bucket_list_item object successfully" do
      expect{
        xhr :delete, :destroy, id: bucket_list_item
      }.to change(BucketListItem, :count).by(-1)
    end
  end

end
