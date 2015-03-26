require 'csv'

# desc "Import CSV Data."
task :create_bucket_list_items_csv => :environment do

  csv_file_path = File.read("#{Rails.root}/lib/tasks/bucket_list.csv")
  csv = CSV.parse(csv_file_path, :headers => true)
  csv.each do |row|
    BucketListItem.create!(
        :name => row[0].try(:encode, "utf-8"),
        :street_address => row[1].try(:encode, "utf-8"),
        :city => row[2].try(:encode, "utf-8"),
        :state => row[3].try(:encode, "utf-8"),
        :zip_code => row[4].try(:encode, "utf-8"),
        :description => row[5].try(:encode, "utf-8"),
        :image_file_name => row[6].try(:encode, "utf-8"),
        :latitude => row[7].try(:encode, "utf-8"),
        :longitude => row[8].try(:encode, "utf-8")
    )
  end

end  
