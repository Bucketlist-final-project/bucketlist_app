task :initialize => :environment do
  Rake::Task["db:drop"].execute
  Rake::Task["db:create"].execute
  Rake::Task["db:migrate"].execute
  Rake::Task["create_interests"].execute
  Rake::Task["create_bucket_list_items"].execute
  Rake::Task["create_comments"].execute
  Rake::Task["create_users"].execute
end
