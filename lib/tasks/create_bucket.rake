task create_bucket_list_items: :environment do
  x = 1
  10.times do
  BucketListItem.create!({
    name: Faker::Hacker.noun,
    description: Faker::Lorem.sentence(3, true),
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip_code: Faker::Address.zip_code,
    image_file_name: x.to_s + '.jpg',

    })
  x +=1
  end

end