task create_interests: :environment do

  x = 1
  10.times do
    Interest.create!({
      name: Faker::Hacker.noun,
      image_file_name: x.to_s + '.jpg',
    })
    x +=1
  end

end
# name
