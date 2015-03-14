task create_users: :environment do

  User.create!({
    email: 'test@test.com',
    password: "password",
    admin: 1,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
  })

  20.times do
    User.create!({
    email: Faker::Internet.email,
    password: "password",
    admin: 0,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    })
  end

end

task :initialize => :environment do
    Rake::Task["db:drop"].execute
    Rake::Task["db:create"].execute
    Rake::Task["db:migrate"].execute
    Rake::Task["create_users"].execute
  end