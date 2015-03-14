require 'rails_helper'

RSpec.describe BucketListItem, type: :model do
  
  it 'should have a name' do
    bucket_list_item = BucketListItem.new
    bucket_list_item.name = 'Test Item'
    expect(bucket_list_item.name).to eq('Test Item')
  end

  it 'should NOT have a name' do
    bucket_list_item = BucketListItem.new
    expect(bucket_list_item.name).not_to eq('Test Item')
  end

  it 'should have a description' do
    bucket_list_item = BucketListItem.new
    bucket_list_item.description = 'Test Item'
    expect(bucket_list_item.description).to eq('Test Item')
  end

  it 'should NOT have a description' do
    bucket_list_item = BucketListItem.new
    expect(bucket_list_item.description).not_to eq('Test Item')
  end

  it 'should have a street_address' do
    bucket_list_item = BucketListItem.new
    bucket_list_item.street_address = 'Test Item'
    expect(bucket_list_item.street_address).to eq('Test Item')
  end

  it 'should NOT have a street_address' do
    bucket_list_item = BucketListItem.new
    expect(bucket_list_item.street_address).not_to eq('Test Item')
  end

  it 'should have a city' do
    bucket_list_item = BucketListItem.new
    bucket_list_item.city = 'Test Item'
    expect(bucket_list_item.city).to eq('Test Item')
  end

  it 'should NOT have a city' do
    bucket_list_item = BucketListItem.new
    expect(bucket_list_item.city).not_to eq('Test Item')
  end

  it 'should have a state' do
    bucket_list_item = BucketListItem.new
    bucket_list_item.state = 'Test Item'
    expect(bucket_list_item.state).to eq('Test Item')
  end

  it 'should NOT have a state' do
    bucket_list_item = BucketListItem.new
    expect(bucket_list_item.state).not_to eq('Test Item')
  end  

  it 'should have a zip_code' do
    bucket_list_item = BucketListItem.new
    bucket_list_item.zip_code = 'Test Item'
    expect(bucket_list_item.zip_code).to eq('Test Item')
  end

  it 'should NOT have a zip_code' do
    bucket_list_item = BucketListItem.new
    expect(bucket_list_item.zip_code).not_to eq('Test Item')
  end

end
