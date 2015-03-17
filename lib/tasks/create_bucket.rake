task create_bucket_list_items: :environment do
  x = 1
  10.times do
  BucketListItem.create!({
    name: Faker::Hacker.noun,
    description: Faker::Lorem.sentence(3, true),
    street_address: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip_code: Faker::Address.zip_code,
    image_file_name: x.to_s + '.jpg',
    user_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })
  x +=1
  end

end