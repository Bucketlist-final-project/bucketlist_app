task create_bucket_list_items: :environment do
  
  name_array = ['The Haunted Jail Tour', 'Haunted Ghost Tour on the USS Yorktown', 'Waverunner Safari Adventure', 'Parasailing', 'Capers Wildlife Exploration', "Frankie's Fun Park"]
  description_array = ['Join us for a behind the scenes tour of The Old City Jail, which housed some of Charleston’s most infamous criminals, 19th century pirates and Civil War prisoners. The Old City Jail was in operation from 1802 until 1939 and most of the building’s original structures remain intact including the cells and warden’s quarters. The Haunted Jail Tour takes you through the cells, hallways and into the places where Charleston’s worst criminals lived and died. This is one of our most popular Charleston ghost tours.
', 'This approximate 90 minute guided tour will walk you through a haunted, historical journey in which you will hear about the heroic sacrifices and the ghosts that have been reported to haunt the USS Yorktown. You will begin your tour with an immersive multimedia experience introducing you to the USS Yorktown and the many accounts of its paranormal activity. 

From there, you will be lead by a professional tour guide from the bowels of the ship to the flight deck where many sightings have taken place and be told stories of Heroes, Sacrifice and the Unexplained. To help in your exploration, you will be provided with the use of a Ghost Meter to measure possible paranormal activity that may be taking place around you.', 'Why not explore the area on a Waverunner with a guided tour of the barrier islands? A Safari Tour is a fun family oriented activity perfect for almost all ages and interests. Each high speed Safari Tour is 1 1/2 hours long (30 miles) and includes a stop on Capers Island (the largest uninhabited island on the eastern sea coast). This island has incredible shelling and wildlife throughout. All tours given by an experienced guide. Drivers must be at least 16 years old.', "Our parasailing captains are experienced in parasailing to offer you the excitement of flying on up to 800 feet of line above the ocean!

Each parasailing excursion includes up to six passengers and lasts for approximately an hour and a half. Each person's 'flight' lasts between 8 - 10 minutes, but the experience will last a lifetime! Spectacular views and the awesome sensation of floating above the earth may inspire you to do it again.", "Enjoy a 3.5 hour boat excursion as we venture to Capers Island, one of the few remaining undeveloped barrier islands. We will cruise through winding tidal creeks to find diverse wildlife living in this salt marsh environment. Common sightings include bottlenose dolphin, osprey, pelicans, bald eagles, herons, egrets, and more. Along the way we'll employ various nets and habitat traps for an up-close look at some of the rarely seen marine creatures that thrive below the surface. As you arrive on Capers, you will have about an hour and a half to explore its pristine 'Bone-yard Beach' and interior freshwater ponds. Capers provides excellent opportunities for shelling and bird watching.", "This amusement park has all the right ingredients for the perfect dosage of fun. Attractions include everything from a rock climbing wall and batting cages to miniature golf, a driving range and various go kart race tracks for all ages. The Drop Zone is a favorite for any adrenaline junkie, catapulting you high into the air and dropping you into a stomach-churning free fall. The Oval Slick Track is another popular activity and Frankie's very own version of go karting. The track is coated with a special friction reducing formula, and go karts adorned with racing slicks seamlessly float across the surface of the track, slipping and sliding around each turn. Guests can also test out their finger agility and gaming skills in Frankie's fully equipped arcade. The park offers free admissions and guests must simply pay for the activities they wish to participate in. With the park open year round, the fun never stops at Frankie's."]
  street_address_array = ['18 Anson Street', '40 Patriots Point Rd', '69 41st Ave', '69 41st Ave', "50 41st Ave", "5000 Ashley Phosphate Rd"]
  city_array = ['Charleston', 'Mount Pleasant', 'Isle of Palms', 'Isle of Palms', "Isle of Palms", "Charleston"]
  state_array = ['SC']
  zip_code_array = [29401, 29464, 29451, 29451, 29451, 29420]
  image_file_name_array = ['hauntedJailTours.jpg', 'ghostYorkTown.jpg', 'waveRunnerSafariAdventure.jpg', 'parasailing.jpg', 'capersWildlife.jpg', 'frankiesFunPark.jpg']
  latitude_array = [32.781976, 32.789954, 32.803435, 32.803435, 32.803200, 32.917651]
  longitude_array = [-79.929277, -79.902006, -79.760464, -79.760464, -79.760341, -80.105006]


  x = 0  
  while x < name_array.length do
  BucketListItem.create!({
    name: name_array[x],
    description: description_array[x],
    street_address: street_address_array[x],
    city: city_array[x],
    state: 'SC',
    zip_code: zip_code_array[x],
    image_file_name: image_file_name_array[x],
    latitude: latitude_array[x],
    longitude: longitude_array[x]
    })
  x +=1
  end

end
