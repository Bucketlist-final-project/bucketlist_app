FactoryGirl.define do
  sequence :email do |n|
    "person#{n}@example.com"
  end
end

FactoryGirl.define do
  factory :user, :class => 'User' do
    email
    password '12345678'
    password_confirmation '12345678'
    first_name 'Test'
    last_name 'Test'
  end

  factory :item_complete do
    user
    user_id user
    bucket_list_item_id = 1
  end
end