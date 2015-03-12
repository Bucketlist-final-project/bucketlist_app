require 'rails_helper'

RSpec.describe Interest, type: :model do

  it 'should have a name' do
    interest = Interest.new
    interest.name = 'Test Item'
    expect(interest.name).to eq('Test Item')
  end

  it 'should NOT have a name' do
    interest = Interest.new
    expect(interest.name).not_to eq('Test Item')
  end

end
