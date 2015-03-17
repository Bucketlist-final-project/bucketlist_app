task create_comments: :environment do

  x = 1
  10.times do
    Comment.create!({
      content: Faker::Lorem.sentence(3, true),
      user_id: x,
      bucket_list_item_id: x
      })
    x+=1
  end




end