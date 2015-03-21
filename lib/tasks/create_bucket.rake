task create_bucket_list_items: :environment do
  x = 1
  10.times do
  BucketListItem.create!({
    name: Faker::Hacker.noun,
    description: Faker::Lorem.sentence(3, true),
    street_address: '510 Mill Street',
    city: 'Mount Pleasant',
    state: 'SC',
    zip_code: 29464,
    image_file_name: x.to_s + '.jpg',
    latitude: 32.793001,
    longitude: -79.877956
    })
  x +=1
  end

end
