task create_completed: :environment do
  
  ItemComplete.create!({
    completed: true,
    user_id: 1,
    bucket_list_item_id: 1
    })

end