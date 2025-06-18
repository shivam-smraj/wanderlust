const sampleListings = [
  {
    "title": "Cozy Beachfront Bungalow",
    "description": "A charming bungalow right on the sand. Perfect for a relaxing getaway with ocean views and private beach access.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 120,
    "location": "Santa Monica, CA",
    "country": "USA",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Modern Downtown Loft",
    "description": "Spacious loft in the heart of the city. Walking distance to restaurants, bars, and public transport.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 200,
    "location": "New York, NY",
    "country": "USA",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Rustic Mountain Cabin",
    "description": "Secluded cabin nestled in the pines. Cozy fireplace, hiking trails out the back door.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 90,
    "location": "Aspen, CO",
    "country": "USA",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Charming Countryside Cottage",
    "description": "Escape to the rolling hills in this fully restored 19th-century cottage with garden and pond.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 85,
    "location": "Cotswolds",
    "country": "UK",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Luxury Ski Chalet",
    "description": "High-end chalet with hot tub and panoramic mountain views. Steps from the gondola.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 350,
    "location": "Zermatt",
    "country": "Switzerland",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Urban Studio with Skyline View",
    "description": "Bright studio apartment overlooking the city skyline, fully equipped kitchen, and high-speed Wi-Fi.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 150,
    "location": "Tokyo",
    "country": "Japan",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Jungle Eco-Lodge",
    "description": "Immerse yourself in nature at this eco-friendly lodge with guided canopy tours and organic meals.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 110,
    "location": "Costa Rica Rainforest",
    "country": "Costa Rica",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Historic Castle Suite",
    "description": "Live like royalty in this restored medieval castle suite, complete with moat and drawbridge.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 400,
    "location": "Edinburgh",
    "country": "UK",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Secluded Desert Villa",
    "description": "Private villa with infinity pool set against spectacular desert dunes. Stargazing optional.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 275,
    "location": "Dubai Desert",
    "country": "UAE",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Lakefront Tiny House",
    "description": "Quirky tiny house perched on the lake shore, with kayak and fishing gear included.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 95,
    "location": "Lake Tahoe, NV",
    "country": "USA",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Clifftop Mediterranean Villa",
    "description": "Elegant villa overlooking the sea, with private terrace and lush gardens.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 320,
    "location": "Amalfi Coast",
    "country": "Italy",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Rainforest Treehouse",
    "description": "Stay high among the treetops in this rustic-but-comfortable treehouse with sweeping jungle views.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 130,
    "location": "Amazon Rainforest",
    "country": "Brazil",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Sahara Desert Camp",
    "description": "Experience the magic of the desert under the stars in our luxury tented camp.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 180,
    "location": "Merzouga",
    "country": "Morocco",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Alpine Glacier Lodge",
    "description": "Remote lodge perched on a glacier edge. Snowshoeing, ice climbing, and sauna included.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 390,
    "location": "Patagonia",
    "country": "Chile",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  },
  {
    "title": "Urban Penthouse Retreat",
    "description": "Luxury penthouse with rooftop terrace, jacuzzi, and skyline views of the city lights.",
    "image": {
      "url": "https://res.cloudinary.com/dfujyzusz/image/upload/v1750232192/wanderlust_DEV/v3lajbzpyk9njfj5mr5t.png",
      "filename": "default"
    },
    "price": 450,
    "location": "Hong Kong",
    "country": "China",
    "reviews": ["6851551d8b03753d23e7fe0f"],
    "owner": "6851551d8b03753d23e7fe0f"
  }
]



const sampleListings1 = [
  {
    "title": "Rustic Cabin in Blue Mountains",
    "description": "Find your perfect oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/234567890/1200/800",
    "price": 300,
    "location": "Blue Mountains",
    "country": "Australia"
  },
  {
    "title": "Grand Estate in Tuscany",
    "description": "Experience this stunning exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/344567890/1200/800",
    "price": 1800,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Chic Studio in Paris",
    "description": "Settle into a breathtaking place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/113456789/1200/800",
    "price": 200,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Modern A-Frame in Norway Fjords region",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/223456789/1200/800",
    "price": 550,
    "location": "Fjords region",
    "country": "Norway"
  },
  {
    "title": "Spacious Beachfront Property in Bora Bora",
    "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration in all its glory from this exquisite lodge.",
    "image": "https://picsum.photos/seed/201234567/1200/800",
    "price": 2800,
    "location": "Bora Bora",
    "country": "French Polynesia"
  },
  {
    "title": "Cozy Bungalow in Hanoi",
    "description": "Experience your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/707435166/1200/800",
    "price": 93,
    "location": "Hanoi",
    "country": "Vietnam"
  },
  {
    "title": "Idyllic Loft in Vienna",
    "description": "Bask in the serene ambiance of this exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/823432422/1200/800",
    "price": 108,
    "location": "Vienna",
    "country": "Austria"
  },
  {
    "title": "Bright Loft in Barcelona",
    "description": "Enjoy a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/789012345/1200/800",
    "price": 150,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Unique Treehouse in New Zealand Fiordland National Park",
    "description": "Settle into the ultimate adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/212345678/1200/800",
    "price": 600,
    "location": "Fiordland National Park",
    "country": "New Zealand"
  },
  {
    "title": "Luxury Lodge in Johannesburg",
    "description": "Discover a cozy yet spacious retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/283626242/1200/800",
    "price": 542,
    "location": "Johannesburg",
    "country": "South Africa"
  },
  {
    "title": "Charming Riad in Marrakech",
    "description": "Discover a unique retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/190123456/1200/800",
    "price": 350,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Cozy Apartment in Lisbon",
    "description": "Settle into your dream home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/769742512/1200/800",
    "price": 97,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "Tranquil Resort in Phi Phi",
    "description": "Discover a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/758414441/1200/800",
    "price": 1100,
    "location": "Koh Phi Phi",
    "country": "Thailand"
  },
  {
    "title": "Modern House in Copenhagen",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/473767117/1200/800",
    "price": 140,
    "location": "Copenhagen",
    "country": "Denmark"
  },
  {
    "title": "Rustic Villa in Provence",
    "description": "Enjoy a comfortable and private oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/689033282/1200/800",
    "price": 313,
    "location": "Provence",
    "country": "France"
  },
  {
    "title": "Modern Treehouse in Tuscany",
    "description": "Witness the beauty of a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/126938971/1200/800",
    "price": 526,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Charming A-Frame in Maui",
    "description": "Settle into a cozy yet spacious escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/306718049/1200/800",
    "price": 558,
    "location": "Maui",
    "country": "USA"
  },
  {
    "title": "Unique Loft in Kyoto",
    "description": "Experience your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/233816738/1200/800",
    "price": 211,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Panoramic Boutique Hotel in Zurich",
    "description": "Experience the serene ambiance of this paradise for families and friends.",
    "image": "https://picsum.photos/seed/171457814/1200/800",
    "price": 224,
    "location": "Zurich",
    "country": "Switzerland"
  },
  {
    "title": "Breathtaking Castle in Edinburgh",
    "description": "Unwind in the ultimate paradise for families and friends.",
    "image": "https://picsum.photos/seed/150534267/1200/800",
    "price": 2200,
    "location": "Edinburgh",
    "country": "UK"
  },
  {
    "title": "Rustic Farmhouse in Cornwall",
    "description": "Discover a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/568916382/1200/800",
    "price": 285,
    "location": "Cornwall",
    "country": "UK"
  },
  {
    "title": "Cozy Cottage in Florence",
    "description": "Experience this stunning historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/267676646/1200/800",
    "price": 232,
    "location": "Florence",
    "country": "Italy"
  },
  {
    "title": "Modern Loft in Toronto",
    "description": "Discover your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/117215160/1200/800",
    "price": 222,
    "location": "Toronto",
    "country": "Canada"
  },
  {
    "title": "Rustic Cabin in Blue Lagoon area",
    "description": "Escape to your dream home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/344007604/1200/800",
    "price": 234,
    "location": "Blue Lagoon area",
    "country": "Iceland"
  },
  {
    "title": "Spacious Resort in Mykonos",
    "description": "Unwind in your dream home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/680373809/1200/800",
    "price": 1800,
    "location": "Mykonos",
    "country": "Greece"
  },
  {
    "title": "Luxury Penthouse in Dubai",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/224095493/1200/800",
    "price": 4000,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Charming Lodge in Krakow",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626487/1200/800",
    "price": 99,
    "location": "Krakow",
    "country": "Poland"
  },
  {
    "title": "Tranquil Lakefront Cabin in Jasper National Park",
    "description": "Immerse yourself in a comfortable and private oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/823330999/1200/800",
    "price": 639,
    "location": "Jasper National Park",
    "country": "Canada"
  },
  {
    "title": "Breathtaking Treehouse in Ubud",
    "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/628045558/1200/800",
    "price": 345,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Exquisite Hotel in Rome",
    "description": "Experience this stunning escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/878696222/1200/800",
    "price": 350,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Serene Guest House in Ha Long Bay",
    "description": "Discover a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/730419131/1200/800",
    "price": 188,
    "location": "Ha Long Bay",
    "country": "Vietnam"
  },
  {
    "title": "Chic City Penthouse in Melbourne",
    "description": "Find your perfect home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/233519808/1200/800",
    "price": 3800,
    "location": "Melbourne",
    "country": "Australia"
  },
  {
    "title": "Family-friendly Lodge in Kruger National Park",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/624535359/1200/800",
    "price": 1200,
    "location": "Kruger National Park",
    "country": "South Africa"
  },
  {
    "title": "Unique Cabin in Lake District",
    "description": "Witness the beauty of the ultimate paradise for families and friends.",
    "image": "https://picsum.photos/seed/339178378/1200/800",
    "price": 311,
    "location": "Lake District",
    "country": "UK"
  },
  {
    "title": "Historic Farmhouse in Provence",
    "description": "Settle into a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/571343717/1200/800",
    "price": 277,
    "location": "Provence",
    "country": "France"
  },
  {
    "title": "Vibrant Villa in Lisbon",
    "description": "Unwind in your dream place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/320150917/1200/800",
    "price": 169,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "Secluded Chalet in Tyrol",
    "description": "Immerse yourself in a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/769352706/1200/800",
    "price": 950,
    "location": "Tyrol",
    "country": "Austria"
  },
  {
    "title": "Grand Resort in Algarve",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/660467140/1200/800",
    "price": 2000,
    "location": "Algarve",
    "country": "Portugal"
  },
  {
    "title": "Stylish Penthouse in Miami Beach",
    "description": "Escape to this unique paradise for families and friends.",
    "image": "https://picsum.photos/seed/231693717/1200/800",
    "price": 4500,
    "location": "Miami Beach",
    "country": "USA"
  },
  {
    "title": "Idyllic Bungalow in Maui",
    "description": "Unwind in the ultimate oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/261971777/1200/800",
    "price": 500,
    "location": "Maui",
    "country": "USA"
  },
  {
    "title": "Luxury Lodge in Queenstown",
    "description": "Witness the beauty of a cozy yet spacious escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/150772714/1200/800",
    "price": 1100,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Modern Treehouse in Costa Rica",
    "description": "Experience the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/563172081/1200/800",
    "price": 450,
    "location": "Monteverde",
    "country": "Costa Rica"
  },
  {
    "title": "Charming Beachfront House in Sydney",
    "description": "Enjoy this stunning retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/724391605/1200/800",
    "price": 890,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Spacious Apartment in Copenhagen",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/711204627/1200/800",
    "price": 120,
    "location": "Copenhagen",
    "country": "Denmark"
  },
  {
    "title": "Breathtaking Resort in Phuket",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/19904257/1200/800",
    "price": 1500,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Luxury Castle in Scotland",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/334208008/1200/800",
    "price": 3500,
    "location": "Scottish Highlands",
    "country": "UK"
  },
  {
    "title": "Serene Villa in Bali",
    "description": "Experience your dream retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/890471926/1200/800",
    "price": 480,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Modern Loft in New York City",
    "description": "Find your perfect urban retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/123456789/1200/800",
    "price": 450,
    "location": "New York City",
    "country": "USA"
  },
  {
    "title": "Charming Farmhouse in Tuscany",
    "description": "Settle into a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/987654321/1200/800",
    "price": 270,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Rustic Cabin in Banff",
    "description": "Experience the ultimate adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/234567890/1200/800",
    "price": 550,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Panoramic Resort in Santorini",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/345678901/1200/800",
    "price": 1800,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Luxury Villa in Amalfi Coast",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/456789012/1200/800",
    "price": 2900,
    "location": "Amalfi Coast",
    "country": "Italy"
  },
  {
    "title": "Secluded Bungalow in Phuket",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/567890123/1200/800",
    "price": 170,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Historic Cottage in Cotswolds",
    "description": "Find your perfect historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/678901234/1200/800",
    "price": 280,
    "location": "Cotswolds",
    "country": "UK"
  },
  {
    "title": "Spacious Lodge in Yellowstone National Park",
    "description": "Witness the beauty of a breathtaking adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/890123456/1200/800",
    "price": 950,
    "location": "Yellowstone National Park",
    "country": "USA"
  },
  {
    "title": "Cozy Treehouse in Finland Lapland",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/901234567/1200/800",
    "price": 400,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Adventure-ready Glamping Tent in Patagonia",
    "description": "Discover a unique adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 320,
    "location": "Patagonia",
    "country": "Argentina"
  },
  {
    "title": "Luxury Beachfront Property in Maldives",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/134567890/1200/800",
    "price": 5000,
    "location": "Malé Atoll",
    "country": "Maldives"
  },
  {
    "title": "Family-friendly Villa in Rio de Janeiro",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/145678901/1200/800",
    "price": 600,
    "location": "Rio de Janeiro",
    "country": "Brazil"
  },
  {
    "title": "Vibrant City Loft in Tokyo",
    "description": "Unwind in your dream place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/156789012/1200/800",
    "price": 300,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Tranquil Resort in Bali",
    "description": "Enjoy the ultimate retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/167890123/1200/800",
    "price": 1200,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Panoramic Ski Chalet in Aspen",
    "description": "Bask in the serene ambiance of this breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/178901234/1200/800",
    "price": 4000,
    "location": "Aspen",
    "country": "USA"
  },
  {
    "title": "Idyllic Cottge in Lake Como",
    "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/189012345/1200/800",
    "price": 700,
    "location": "Lake Como",
    "country": "Italy"
  },
  {
    "title": "Cozy Tiny Home in Oregon",
    "description": "Experience this stunning charming space in a vibrant neighborhood.",
    "image": "https://picsum.photos/seed/245678901/1200/800",
    "price": 120,
    "location": "Portland outskirts",
    "country": "USA"
  },
  {
    "title": "Exquisite Villa in Phuket",
    "description": "Discover a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/256789012/1200/800",
    "price": 1500,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Luxury Apartment in London",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/278901234/1200/800",
    "price": 800,
    "location": "London",
    "country": "UK"
  },
  {
    "title": "Tranquil Resort in Bora Bora",
    "description": "Unwind in your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/289012345/1200/800",
    "price": 3500,
    "location": "Bora Bora",
    "country": "French Polynesia"
  },
  {
    "title": "Adventure-ready Yurt in Mongolia",
    "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/300123456/1200/800",
    "price": 180,
    "location": "Gobi Desert",
    "country": "Mongolia"
  },
  {
    "title": "Chic City Loft in San Francisco",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/311234567/1200/800",
    "price": 500,
    "location": "San Francisco",
    "country": "USA"
  },
  {
    "title": "Secluded Glamping Tent in Patagonia",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/322345678/1200/800",
    "price": 380,
    "location": "Patagonia",
    "country": "Argentina"
  },
  {
    "title": "Historic Farmhouse in Loire Valley",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/333456789/1200/800",
    "price": 320,
    "location": "Loire Valley",
    "country": "France"
  },
  {
    "title": "Cozy Lakefront Cabin in Lake Tahoe",
    "description": "Enjoy the ultimate oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/355678901/1200/800",
    "price": 750,
    "location": "Lake Tahoe",
    "country": "USA"
  },
  {
    "title": "Modern Townhouse in Toronto",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/366789012/1200/800",
    "price": 250,
    "location": "Toronto",
    "country": "Canada"
  },
  {
    "title": "Luxury Chalet in Verbier",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/377890123/1200/800",
    "price": 4200,
    "location": "Verbier",
    "country": "Switzerland"
  },
  {
    "title": "Bright Resort in Thailand Krabi",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/399012345/1200/800",
    "price": 1000,
    "location": "Krabi",
    "country": "Thailand"
  },
  {
    "title": "Family-friendly House in Auckland",
    "description": "Discover a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/410123456/1200/800",
    "price": 380,
    "location": "Auckland",
    "country": "New Zealand"
  },
  {
    "title": "Vibrant Apartment in Berlin",
    "description": "Enjoy the ultimate city pad, close to all the action.",
    "image": "https://picsum.photos/seed/421234567/1200/800",
    "price": 130,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Tranquil Oasis in Sedona",
    "description": "Unwind in your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/432345678/1200/800",
    "price": 500,
    "location": "Sedona",
    "country": "USA"
  },
  {
    "title": "Panoramic Oceanfront Villa in Hawaii",
    "description": "Bask in the serene ambiance of this exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/443456789/1200/800",
    "price": 3500,
    "location": "Maui",
    "country": "USA"
  },
  {
    "title": "Idyllic Country Cottage in Ireland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/454567890/1200/800",
    "price": 280,
    "location": "Galway",
    "country": "Ireland"
  },
  {
    "title": "Rustic Ski Chalet in French Alps",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/475678901/1200/800",
    "price": 1100,
    "location": "Chamonix",
    "country": "France"
  },
  {
    "title": "Cozy Glamping Tent in Icelandic Golden Circle",
    "description": "Experience this stunning adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/486789012/1200/800",
    "price": 200,
    "location": "Golden Circle",
    "country": "Iceland"
  },
  {
    "title": "Exquisite Safari Lodge in Serengeti National Park",
    "description": "Witness the beauty of a breathtaking adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/497890123/1200/800",
    "price": 2000,
    "location": "Serengeti National Park",
    "country": "Tanzania"
  },
  {
    "title": "Bright Studio in Rome",
    "description": "Find your perfect place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/508901234/1200/800",
    "price": 100,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Luxury Apartment in Barcelona",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/519012345/1200/800",
    "price": 700,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Secluded Farmhouse in Rural Spain",
    "description": "Escape to a cozy yet spacious retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/530123456/1200/800",
    "price": 300,
    "location": "Granada",
    "country": "Spain"
  },
  {
    "title": "Historic Chateau in Bordeaux",
    "description": "Experience this stunning historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/541234567/1200/800",
    "price": 1500,
    "location": "Bordeaux",
    "country": "France"
  },
  {
    "title": "Family-friendly Lodge in Canadian Rockies",
    "description": "Witness the beauty of a breathtaking adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/563456789/1200/800",
    "price": 900,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Vibrant City Loft in Amsterdam",
    "description": "Unwind in your dream place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/574567890/1200/800",
    "price": 180,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Tranquil Oasis in Ubud",
    "description": "Enjoy the ultimate oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/585678901/1200/800",
    "price": 600,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Panoramic Mountain Cabin in Switzerland Zermatt",
    "description": "Bask in the serene ambiance of this breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/596789012/1200/800",
    "price": 1500,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Idyllic Bungalow in Phuket",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/607890123/1200/800",
    "price": 160,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Modern Villa in Bali",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/618901234/1200/800",
    "price": 700,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Rustic Lodge in Kruger National Park",
    "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/630012345/1200/800",
    "price": 1000,
    "location": "Kruger National Park",
    "country": "South Africa"
  },
  {
    "title": "Exquisite Penthouse in Miami Beach",
    "description": "Find your perfect exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/651234567/1200/800",
    "price": 4000,
    "location": "Miami Beach",
    "country": "USA"
  },
  {
    "title": "Bright Apartment in Madrid",
    "description": "Enjoy a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/662345678/1200/800",
    "price": 170,
    "location": "Madrid",
    "country": "Spain"
  },
  {
    "title": "Luxury Yacht in the Caribbean",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/673456789/1200/800",
    "price": 4500,
    "location": "Turks and Caicos",
    "country": "Caribbean"
  },
  {
    "title": "Serene Lakefront Cabin in Lake Saimaa",
    "description": "Discover a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/684567890/1200/800",
    "price": 500,
    "location": "Lake Saimaa",
    "country": "Finland"
  },
  {
    "title": "Family-friendly Resort in Fiji",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/695678901/1200/800",
    "price": 1800,
    "location": "Mamanuca Islands",
    "country": "Fiji"
  },
  {
    "title": "Vibrant City Pad in Sao Paulo",
    "description": "Unwind in your dream urban place, close to all the action.",
    "image": "https://picsum.photos/seed/706789012/1200/800",
    "price": 150,
    "location": "São Paulo",
    "country": "Brazil"
  },
  {
    "title": "Tranquil Bungalow in Goa",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/717890123/1200/800",
    "price": 200,
    "location": "Goa",
    "country": "India"
  },
  {
    "title": "Panoramic Mountain Chalet in Dolomites",
    "description": "Bask in the serene ambiance of this breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/728901234/1200/800",
    "price": 3000,
    "location": "Dolomites",
    "country": "Italy"
  },
  {
    "title": "Idyllic A-Frame in the Alps",
    "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/740012345/1200/800",
    "price": 600,
    "location": "French Alps",
    "country": "France"
  },
  {
    "title": "Modern Ski Chalet in Courchevel",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/751123456/1200/800",
    "price": 3500,
    "location": "Courchevel",
    "country": "France"
  },
  {
    "title": "Rustic Guest House in Vietnam Hoi An",
    "description": "Experience this stunning charming space in a vibrant neighborhood.",
    "image": "https://picsum.photos/seed/762234567/1200/800",
    "price": 90,
    "location": "Hoi An",
    "country": "Vietnam"
  },
  {
    "title": "Charming Safari Lodge in Botswana Okavango Delta",
    "description": "Discover a unique adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/783456789/1200/800",
    "price": 2500,
    "location": "Okavango Delta",
    "country": "Botswana"
  },
  {
    "title": "Spacious Condo in Los Angeles",
    "description": "Find your perfect urban retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/794567890/1200/800",
    "price": 400,
    "location": "Los Angeles",
    "country": "USA"
  },
  {
    "title": "Unique Treehouse in New Zealand",
    "description": "Witness the beauty of a breathtaking adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/805678901/1200/800",
    "price": 450,
    "location": "Rotorua",
    "country": "New Zealand"
  },
  {
    "title": "Luxury Villa in Florence",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/816789012/1200/800",
    "price": 1800,
    "location": "Florence",
    "country": "Italy"
  },
  {
    "title": "Exquisite Hotel in Tokyo",
    "description": "Experience this stunning place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/827890123/1200/800",
    "price": 600,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Bright Bungalow in Bali",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/838901234/1200/800",
    "price": 180,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Tranquil Island Resort in Greece",
    "description": "Unwind in your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/850012345/1200/800",
    "price": 2200,
    "location": "Mykonos",
    "country": "Greece"
  },
  {
    "title": "Adventure-ready Tiny Home in the Wild",
    "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/861123456/1200/800",
    "price": 150,
    "location": "Asheville outskirts",
    "country": "USA"
  },
  {
    "title": "Chic City Pad in Copenhagen",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/872234567/1200/800",
    "price": 250,
    "location": "Copenhagen",
    "country": "Denmark"
  },
  {
    "title": "Historic Palace in Jaipur",
    "description": "Find your perfect historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/893456789/1200/800",
    "price": 900,
    "location": "Jaipur",
    "country": "India"
  },
  {
    "title": "Grand Castle in Ireland",
    "description": "Experience this stunning exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/904567890/1200/800",
    "price": 3800,
    "location": "Dublin outskirts",
    "country": "Ireland"
  },
  {
    "title": "Cozy Beachfront Cottage in Cornwall",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/915678901/1200/800",
    "price": 300,
    "location": "Cornwall",
    "country": "UK"
  },
  {
    "title": "Modern Waterfront Retreat in Vancouver",
    "description": "Unwind in your dream retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/926789012/1200/800",
    "price": 700,
    "location": "Vancouver",
    "country": "Canada"
  },
  {
    "title": "Luxury Apartment in Geneva",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/937890123/1200/800",
    "price": 1000,
    "location": "Geneva",
    "country": "Switzerland"
  },
  {
    "title": "Serene Guest House in Croatia Plitvice Lakes",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/948901234/1200/800",
    "price": 150,
    "location": "Plitvice Lakes",
    "country": "Croatia"
  },
  {
    "title": "Vibrant Villa in Lisbon",
    "description": "Unwind in your dream place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/320150917/1200/800",
    "price": 169,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "Tranquil Resort in Bora Bora",
    "description": "Unwind in your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/289012345/1200/800",
    "price": 3500,
    "location": "Bora Bora",
    "country": "French Polynesia"
  },
  {
    "title": "Panoramic Mountain Ski Chalet in Austria",
    "description": "Bask in the serene ambiance of this breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/991234567/1200/800",
    "price": 2800,
    "location": "Tyrol",
    "country": "Austria"
  },
  {
    "title": "Exquisite Penthouse in Paris",
    "description": "Find your perfect exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/245456789/1200/800",
    "price": 4800,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Rustic Ski Chalet in Zermatt",
    "description": "Settle into a breathtaking adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/876543210/1200/800",
    "price": 3200,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Cozy Lakeside Cabin in Canada",
    "description": "Experience the ultimate oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/543210987/1200/800",
    "price": 600,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Modern Beachfront Villa in Bali",
    "description": "Discover a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/654321098/1200/800",
    "price": 1500,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Luxury City Loft in New York City",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/765432109/1200/800",
    "price": 1000,
    "location": "New York City",
    "country": "USA"
  },
  {
    "title": "Serene Farmhouse in Provence",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/876543210/1200/800",
    "price": 350,
    "location": "Provence",
    "country": "France"
  },
  {
    "title": "Family-friendly Beachfront Resort in Phuket",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/987654321/1200/800",
    "price": 1800,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Vibrant Urban Studio in Tokyo",
    "description": "Enjoy the ultimate urban place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/123456789/1200/800",
    "price": 200,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Tranquil Island Retreat in Greece",
    "description": "Bask in the serene ambiance of this exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/234567890/1200/800",
    "price": 2500,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Panoramic Mountain View House in Dolomites",
    "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/345678901/1200/800",
    "price": 1900,
    "location": "Dolomites",
    "country": "Italy"
  },
  {
    "title": "Idyllic Desert Oasis in Morocco",
    "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/456789012/1200/800",
    "price": 400,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Charming Country Cottage in UK",
    "description": "Settle into a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/567890123/1200/800",
    "price": 280,
    "location": "Cotswolds",
    "country": "UK"
  },
  {
    "title": "Unique Treehouse in New Zealand",
    "description": "Experience your dream adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/678901234/1200/800",
    "price": 480,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Adventure-ready Glamping Tent in Iceland",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/789012345/1200/800",
    "price": 250,
    "location": "Golden Circle",
    "country": "Iceland"
  },
  {
    "title": "Exquisite Riverside Villa in France",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/890123456/1200/800",
    "price": 2800,
    "location": "Bordeaux",
    "country": "France"
  },
  {
    "title": "Bright City Apartment in Rome",
    "description": "Find your perfect place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/901234567/1200/800",
    "price": 180,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Luxury Safari Lodge in Tanzania",
    "description": "Immerse yourself in this unique adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/123456789/1200/800",
    "price": 3000,
    "location": "Serengeti National Park",
    "country": "Tanzania"
  },
  {
    "title": "Secluded Chalet in Swiss Alps",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/234567890/1200/800",
    "price": 1500,
    "location": "Verbier",
    "country": "Switzerland"
  },
  {
    "title": "Historic Old Town House in Prague",
    "description": "Experience this stunning historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/345678901/1200/800",
    "price": 320,
    "location": "Prague",
    "country": "Czech Republic"
  },
  {
    "title": "Grand Lakeside Villa in Italy",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/456789012/1200/800",
    "price": 2000,
    "location": "Lake Como",
    "country": "Italy"
  },
  {
    "title": "Cozy Log Cabin in Norway",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/567890123/1200/800",
    "price": 500,
    "location": "Fjords region",
    "country": "Norway"
  },
  {
    "title": "Modern Penthouse in Sydney",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/678901234/1200/800",
    "price": 4000,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Spacious Island Villa in Fiji",
    "description": "Unwind in your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/789012345/1200/800",
    "price": 2800,
    "location": "Yasawa Islands",
    "country": "Fiji"
  },
  {
    "title": "Charming Waterfront Cottage in Canada",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/890123456/1200/800",
    "price": 450,
    "location": "Tofino",
    "country": "Canada"
  },
  {
    "title": "Idyllic Desert Retreat in UAE",
    "description": "Find your perfect desert oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/901234567/1200/800",
    "price": 900,
    "location": "Abu Dhabi",
    "country": "UAE"
  },
  {
    "title": "Vibrant Apartment in Amsterdam",
    "description": "Experience your dream urban place, close to all the action.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 200,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Tranquil Jungle Lodge in Costa Rica",
    "description": "Immerse yourself in a comfortable and private retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 600,
    "location": "Arenal",
    "country": "Costa Rica"
  },
  {
    "title": "Panoramic Mountain View Villa in Greece",
    "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 1800,
    "location": "Crete",
    "country": "Greece"
  },
  {
    "title": "Exquisite Wine Estate in Argentina",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/435678901/1200/800",
    "price": 1500,
    "location": "Mendoza",
    "country": "Argentina"
  },
  {
    "title": "Rustic Ski-In Chalet in Austria",
    "description": "Settle into a breathtaking adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/546789012/1200/800",
    "price": 2800,
    "location": "Tyrol",
    "country": "Austria"
  },
  {
    "title": "Cozy Countryside Guesthouse in Ireland",
    "description": "Enjoy a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/657890123/1200/800",
    "price": 220,
    "location": "Galway",
    "country": "Ireland"
  },
  {
    "title": "Modern Glass House in California",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/768901234/1200/800",
    "price": 1800,
    "location": "Los Angeles",
    "country": "USA"
  },
  {
    "title": "Luxury Villa in Florence",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/879012345/1200/800",
    "price": 1800,
    "location": "Florence",
    "country": "Italy"
  },
  {
    "title": "Serene Safari Lodge in South Africa",
    "description": "Experience your dream adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/980123456/1200/800",
    "price": 2200,
    "location": "Kruger National Park",
    "country": "South Africa"
  },
  {
    "title": "Family-friendly Townhouse in Mexico",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 380,
    "location": "Playa del Carmen",
    "country": "Mexico"
  },
  {
    "title": "Vibrant Beachfront Condo in Spain",
    "description": "Enjoy the ultimate place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 600,
    "location": "Malaga",
    "country": "Spain"
  },
  {
    "title": "Tranquil Waterside Villa in Sweden",
    "description": "Bask in the serene ambiance of this exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 900,
    "location": "Stockholm",
    "country": "Sweden"
  },
  {
    "title": "Idyllic A-Frame Cabin in Finland",
    "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/435678901/1200/800",
    "price": 380,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Charming Alpine Chalet in Switzerland",
    "description": "Settle into a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/546789012/1200/800",
    "price": 1800,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Unique Historical Property in Peru",
    "description": "Experience this stunning historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/657890123/1200/800",
    "price": 400,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Adventure-ready Lakeside Lodge in New Zealand",
    "description": "Discover a unique adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/768901234/1200/800",
    "price": 850,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Exquisite Hotel in Rome",
    "description": "Unwind in the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/879012345/1200/800",
    "price": 350,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Bright Ski Condo in Colorado",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/980123456/1200/800",
    "price": 750,
    "location": "Aspen",
    "country": "USA"
  },
  {
    "title": "Luxury Yacht Charter in Thailand",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 4000,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Secluded Glamping Dome in Jordan",
    "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 300,
    "location": "Wadi Rum",
    "country": "Jordan"
  },
  {
    "title": "Historic Farmhouse in Brazil",
    "description": "Settle into a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 400,
    "location": "Florianopolis",
    "country": "Brazil"
  },
  {
    "title": "Grand Estate in Spain",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/435678901/1200/800",
    "price": 2000,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Cozy Townhouse in Toronto",
    "description": "Unwind in your dream urban place, close to all the action.",
    "image": "https://picsum.photos/seed/546789012/1200/800",
    "price": 300,
    "location": "Toronto",
    "country": "Canada"
  },
  {
    "title": "Modern Beachfront Villa in Vietnam",
    "description": "Experience your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/657890123/1200/800",
    "price": 700,
    "location": "Da Nang",
    "country": "Vietnam"
  },
  {
    "title": "Spacious Desert Retreat in Egypt",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/768901234/1200/800",
    "price": 500,
    "location": "Luxor",
    "country": "Egypt"
  },
  {
    "title": "Charming Island Bungalow in Thailand",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/879012345/1200/800",
    "price": 250,
    "location": "Koh Phi Phi",
    "country": "Thailand"
  },
  {
    "title": "Idyllic Vineyard Stay in Portugal",
    "description": "Find your perfect historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/980123456/1200/800",
    "price": 300,
    "location": "Porto",
    "country": "Portugal"
  },
  {
    "title": "Vibrant City Apartment in Berlin",
    "description": "Immerse yourself in this unique urban retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 160,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Tranquil Country House in Australia",
    "description": "Unwind in your dream retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 500,
    "location": "Tasmania",
    "country": "Australia"
  },
  {
    "title": "Panoramic Oceanfront Home in Mexico",
    "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 1500,
    "location": "Puerto Vallarta",
    "country": "Mexico"
  },
  {
    "title": "Exquisite Castle Stay in France",
    "description": "Experience this stunning exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/435678901/1200/800",
    "price": 3500,
    "location": "Loire Valley",
    "country": "France"
  },
  {
    "title": "Rustic Lakeside Lodge in US",
    "description": "Settle into a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/546789012/1200/800",
    "price": 700,
    "location": "Yellowstone National Park",
    "country": "USA"
  },
  {
    "title": "Cozy Riverfront Cabin in US",
    "description": "Enjoy the ultimate adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/657890123/1200/800",
    "price": 400,
    "location": "New Orleans",
    "country": "USA"
  },
  {
    "title": "Modern Design Studio in Japan",
    "description": "Discover your dream place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/768901234/1200/800",
    "price": 280,
    "location": "Osaka",
    "country": "Japan"
  },
  {
    "title": "Luxury Oceanfront Condo in South Africa",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/879012345/1200/800",
    "price": 1200,
    "location": "Cape Town",
    "country": "South Africa"
  },
  {
    "title": "Serene Boutique Hotel in Vietnam",
    "description": "Unwind in your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/980123456/1200/800",
    "price": 400,
    "location": "Hoi An",
    "country": "Vietnam"
  },
  {
    "title": "Family-friendly Villa in Croatia",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 900,
    "location": "Dubrovnik",
    "country": "Croatia"
  },
  {
    "title": "Vibrant Apartment in Barcelona",
    "description": "Enjoy the ultimate city pad, close to all the action.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 190,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Tranquil Villa in Tuscany",
    "description": "Bask in the serene ambiance of this exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 1200,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Idyllic A-Frame Home in Norway",
    "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/435678901/1200/800",
    "price": 450,
    "location": "Bergen",
    "country": "Norway"
  },
  {
    "title": "Charming Safari Camp in India",
    "description": "Settle into a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/546789012/1200/800",
    "price": 600,
    "location": "Jaipur",
    "country": "India"
  },
  {
    "title": "Unique Island Glamping in Vietnam",
    "description": "Experience this stunning adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/657890123/1200/800",
    "price": 280,
    "location": "Ha Long Bay",
    "country": "Vietnam"
  },
  {
    "title": "Adventure-ready Mountain Lodge in Canada",
    "description": "Discover a unique adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/768901234/1200/800",
    "price": 950,
    "location": "Whistler",
    "country": "Canada"
  },
  {
    "title": "Exquisite Penthouse in Milan",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/879012345/1200/800",
    "price": 4500,
    "location": "Milan",
    "country": "Italy"
  },
  {
    "title": "Bright City Apartment in Lisbon",
    "description": "Find your perfect place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/980123456/1200/800",
    "price": 150,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "Luxury Beachfront Bungalow in Maldives",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 5000,
    "location": "Malé Atoll",
    "country": "Maldives"
  },
  {
    "title": "Secluded Country House in Greece",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 550,
    "location": "Rhodes",
    "country": "Greece"
  },
  {
    "title": "Historic Colonial Villa in Brazil",
    "description": "Settle into a comfortable and private historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 800,
    "location": "Salvador",
    "country": "Brazil"
  },
  {
    "title": "Grand Estate in London",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/435678901/1200/800",
    "price": 3000,
    "location": "London",
    "country": "UK"
  },
  {
    "title": "Cozy Ski Chalet in Colorado",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/546789012/1200/800",
    "price": 1500,
    "location": "Aspen",
    "country": "USA"
  },
  {
    "title": "Modern Urban Loft in Los Angeles",
    "description": "Experience your dream urban place, close to all the action.",
    "image": "https://picsum.photos/seed/657890123/1200/800",
    "price": 600,
    "location": "Los Angeles",
    "country": "USA"
  },
  {
    "title": "Spacious Desert Bungalow in Egypt",
    "description": "Enjoy the ultimate oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/768901234/1200/800",
    "price": 450,
    "location": "Aswan",
    "country": "Egypt"
  },
  {
    "title": "Charming Treehouse in New Zealand",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/879012345/1200/800",
    "price": 350,
    "location": "Rotorua",
    "country": "New Zealand"
  },
  {
    "title": "Idyllic Lakefront Cabin in Finland",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/980123456/1200/800",
    "price": 500,
    "location": "Lake Saimaa",
    "country": "Finland"
  },
  {
    "title": "Vibrant Waterside Apartment in Sydney",
    "description": "Immerse yourself in this unique place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 400,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Tranquil Island Resort in Fiji",
    "description": "Unwind in your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 2500,
    "location": "Nadi",
    "country": "Fiji"
  },
  {
    "title": "Panoramic Mountain View Home in Norway",
    "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 900,
    "location": "Fjords region",
    "country": "Norway"
  },
  {
    "title": "Exquisite Ski-in Chalet in Switzerland",
    "description": "Experience this stunning exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/435678901/1200/800",
    "price": 4000,
    "location": "Verbier",
    "country": "Switzerland"
  },
  {
    "title": "Rustic Guest House in Portugal",
    "description": "Settle into a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/546789012/1200/800",
    "price": 180,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "Cozy Lakeside Retreat in Canada",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/657890123/1200/800",
    "price": 550,
    "location": "Whistler",
    "country": "Canada"
  },
  {
    "title": "Modern Safari Tent in South Africa",
    "description": "Discover a breathtaking adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/768901234/1200/800",
    "price": 700,
    "location": "Kruger National Park",
    "country": "South Africa"
  },
  {
    "title": "Luxury Resort in the Philippines",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/879012345/1200/800",
    "price": 1500,
    "location": "El Nido, Palawan",
    "country": "Philippines"
  },
  {
    "title": "Serene Apartment in Japan",
    "description": "Find your perfect place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/980123456/1200/800",
    "price": 300,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Family-friendly Townhouse in UK",
    "description": "Immerse yourself in this unique historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 450,
    "location": "Edinburgh",
    "country": "UK"
  },
  {
    "title": "Vibrant City Pad in Singapore",
    "description": "Experience your dream urban place, close to all the action.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 500,
    "location": "Singapore",
    "country": "Singapore"
  },
  {
    "title": "Tranquil Farmhouse in Tuscany",
    "description": "Bask in the serene ambiance of this exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 900,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Idyllic A-Frame Home in USA",
    "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/435678901/1200/800",
    "price": 380,
    "location": "Aspen",
    "country": "USA"
  },
  {
    "title": "Charming Hillside Cabin in Portugal",
    "description": "Settle into a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/546789012/1200/800",
    "price": 280,
    "location": "Sintra",
    "country": "Portugal"
  },
  {
    "title": "Unique Waterfront Property in Sweden",
    "description": "Discover a unique adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/657890123/1200/800",
    "price": 700,
    "location": "Stockholm",
    "country": "Sweden"
  },
  {
    "title": "Adventure-ready Treehouse in Brazil",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/768901234/1200/800",
    "price": 300,
    "location": "Florianopolis",
    "country": "Brazil"
  },
  {
    "title": "Exquisite Penthouse in Toronto",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/879012345/1200/800",
    "price": 3500,
    "location": "Toronto",
    "country": "Canada"
  },
  {
    "title": "Bright Countryside Cottage in France",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/980123456/1200/800",
    "price": 250,
    "location": "Provence",
    "country": "France"
  },
  {
    "title": "Luxury Yacht Charter in Italy",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 4800,
    "location": "Amalfi Coast",
    "country": "Italy"
  },
  {
    "title": "Secluded Desert Glamping in Jordan",
    "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 350,
    "location": "Wadi Rum",
    "country": "Jordan"
  },
  {
    "title": "Historic Stone Villa in Greece",
    "description": "Settle into a comfortable and private historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 800,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Grand Alpine Chalet in Austria",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/435678901/1200/800",
    "price": 2800,
    "location": "Tyrol",
    "country": "Austria"
  },
  {
    "title": "Cozy Townhouse in Sydney",
    "description": "Unwind in your dream urban place, close to all the action.",
    "image": "https://picsum.photos/seed/546789012/1200/800",
    "price": 400,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Modern Safari Lodge in South Africa",
    "description": "Experience your dream adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/657890123/1200/800",
    "price": 1800,
    "location": "Kruger National Park",
    "country": "South Africa"
  },
  {
    "title": "Spacious Beachfront Resort in Thailand",
    "description": "Enjoy the ultimate paradise for families and friends.",
    "image": "https://picsum.photos/seed/768901234/1200/800",
    "price": 1900,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Charming Boutique Hotel in Vietnam",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/879012345/1200/800",
    "price": 400,
    "location": "Hanoi",
    "country": "Vietnam"
  },
  {
    "title": "Idyllic Vineyard Retreat in Argentina",
    "description": "Find your perfect historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/980123456/1200/800",
    "price": 350,
    "location": "Mendoza",
    "country": "Argentina"
  },
  {
    "title": "Vibrant City Pad in Japan",
    "description": "Immerse yourself in this unique urban retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 250,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Tranquil Villa in Amalfi Coast",
    "description": "Unwind in your dream retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 1500,
    "location": "Amalfi Coast",
    "country": "Italy"
  },
  {
    "title": "Panoramic Mountain Home in Switzerland",
    "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 1800,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Exquisite Country Estate in Ireland",
    "description": "Experience this stunning exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/435678901/1200/800",
    "price": 3000,
    "location": "Dublin outskirts",
    "country": "Ireland"
  },
  {
    "title": "Rustic Lakeside Cabin in USA",
    "description": "Settle into a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/546789012/1200/800",
    "price": 600,
    "location": "Lake Tahoe",
    "country": "USA"
  },
  {
    "title": "Cozy Island Bungalow in Indonesia",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/657890123/1200/800",
    "price": 220,
    "location": "Gili Islands",
    "country": "Indonesia"
  },
  {
    "title": "Modern Urban Penthouse in Mexico",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/768901234/1200/800",
    "price": 2800,
    "location": "Mexico City",
    "country": "Mexico"
  },
  {
    "title": "Spacious Resort in Mauritius",
    "description": "Unwind in your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/879012345/1200/800",
    "price": 1800,
    "location": "Port Louis",
    "country": "Mauritius"
  },
  {
    "title": "Charming Riverside Cabin in Canada",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/980123456/1200/800",
    "price": 400,
    "location": "Quebec City",
    "country": "Canada"
  },
  {
    "title": "Idyllic Farm Stay in India",
    "description": "Find your perfect historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/102345678/1200/800",
    "price": 250,
    "location": "Kerala",
    "country": "India"
  },
  {
    "title": "Vibrant Apartment in Madrid",
    "description": "Immerse yourself in this unique urban retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/213456789/1200/800",
    "price": 200,
    "location": "Madrid",
    "country": "Spain"
  },
  {
    "title": "Tranquil Coastal Villa in Portugal",
    "description": "Unwind in your dream retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/324567890/1200/800",
    "price": 900,
    "location": "Cascais",
    "country": "Portugal"
  },
  {
    "title": "Panoramic Oceanfront Villa in Hawaii",
    "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/443456789/1200/800",
    "price": 3500,
    "location": "Maui",
    "country": "USA"
  },
  {
    "title": "Exquisite Hotel in Rome",
    "description": "Experience this stunning escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/878696222/1200/800",
    "price": 350,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Cozy Farmhouse in Tuscany",
    "description": "Settle into a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/987654321/1200/800",
    "price": 270,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Luxury Yacht in the Caribbean",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/673456789/1200/800",
    "price": 4500,
    "location": "Turks and Caicos",
    "country": "Caribbean"
  },
  {
    "title": "Cozy Beachfront Cottage in Cornwall",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/915678901/1200/800",
    "price": 300,
    "location": "Cornwall",
    "country": "UK"
  },
  {
    "title": "Bright Loft in Barcelona",
    "description": "Enjoy a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/789012345/1200/800",
    "price": 150,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Serene Villa in Bali",
    "description": "Experience your dream retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/890471926/1200/800",
    "price": 480,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Rustic Chalet in Canadian Rockies",
    "description": "Experience the ultimate adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/563456789/1200/800",
    "price": 900,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Historic Chateau in Bordeaux",
    "description": "Experience this stunning historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/541234567/1200/800",
    "price": 1500,
    "location": "Bordeaux",
    "country": "France"
  },
  {
    "title": "Unique Cabin in Lake District",
    "description": "Witness the beauty of the ultimate paradise for families and friends.",
    "image": "https://picsum.photos/seed/339178378/1200/800",
    "price": 311,
    "location": "Lake District",
    "country": "UK"
  },
  {
    "title": "Modern Loft in Toronto",
    "description": "Discover your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/117215160/1200/800",
    "price": 222,
    "location": "Toronto",
    "country": "Canada"
  },
  {
    "title": "Secluded Glamping Tent in Icelandic Golden Circle",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/486789012/1200/800",
    "price": 200,
    "location": "Golden Circle",
    "country": "Iceland"
  },
  {
    "title": "Grand Resort in Algarve",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/660467140/1200/800",
    "price": 2000,
    "location": "Algarve",
    "country": "Portugal"
  },
  {
    "title": "Modern House in Copenhagen",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/473767117/1200/800",
    "price": 140,
    "location": "Copenhagen",
    "country": "Denmark"
  },
  {
    "title": "Luxury Lodge in Queenstown",
    "description": "Witness the beauty of a cozy yet spacious escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/150772714/1200/800",
    "price": 1100,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Family-friendly Resort in Fiji",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/695678901/1200/800",
    "price": 1800,
    "location": "Mamanuca Islands",
    "country": "Fiji"
  },
  {
    "title": "Rustic Farmhouse in Cornwall",
    "description": "Discover a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/568916382/1200/800",
    "price": 285,
    "location": "Cornwall",
    "country": "UK"
  },
  {
    "title": "Adventure-ready Yurt in Mongolia",
    "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/300123456/1200/800",
    "price": 180,
    "location": "Gobi Desert",
    "country": "Mongolia"
  },
  {
    "title": "Spacious Island Condo in Sydney",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626488/1200/800",
    "price": 500,
    "location": "Gold Coast",
    "country": "Australia"
  },
  {
    "title": "Charming Beachfront Villa in Phuket",
    "description": "Discover a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626489/1200/800",
    "price": 750,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Idyllic Ski Chalet in French Alps",
    "description": "Bask in the serene ambiance of this breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/972626490/1200/800",
    "price": 2800,
    "location": "Chamonix",
    "country": "France"
  },
  {
    "title": "Vibrant City Apartment in Prague",
    "description": "Enjoy the ultimate urban place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626491/1200/800",
    "price": 150,
    "location": "Prague",
    "country": "Czech Republic"
  },
  {
    "title": "Tranquil Waterside House in Seattle",
    "description": "Experience your dream retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626492/1200/800",
    "price": 500,
    "location": "Seattle",
    "country": "USA"
  },
  {
    "title": "Panoramic Mountain Retreat in Colorado",
    "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
    "image": "https://picsum.photos/seed/972626493/1200/800",
    "price": 1200,
    "location": "Aspen",
    "country": "USA"
  },
  {
    "title": "Exquisite Castle in Italy",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626494/1200/800",
    "price": 3000,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Luxury Beachfront Estate in Mexico",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626495/1200/800",
    "price": 3500,
    "location": "Playa del Carmen",
    "country": "Mexico"
  },
  {
    "title": "Serene Desert Lodge in Egypt",
    "description": "Unwind in your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626496/1200/800",
    "price": 800,
    "location": "Luxor",
    "country": "Egypt"
  },
  {
    "title": "Family-friendly Treehouse in Costa Rica",
    "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626497/1200/800",
    "price": 400,
    "location": "Monteverde",
    "country": "Costa Rica"
  },
  {
    "title": "Bright Loft in Barcelona",
    "description": "Enjoy a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626498/1200/800",
    "price": 180,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Rustic Cabin in Canada",
    "description": "Discover a unique retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626499/1200/800",
    "price": 350,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Modern Townhouse in Toronto",
    "description": "Unwind in your dream urban place, close to all the action.",
    "image": "https://picsum.photos/seed/972626500/1200/800",
    "price": 280,
    "location": "Toronto",
    "country": "Canada"
  },
  {
    "title": "Spacious Island Villa in Maldives",
    "description": "Experience your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626501/1200/800",
    "price": 4000,
    "location": "Malé Atoll",
    "country": "Maldives"
  },
  {
    "title": "Chic City Studio in Paris",
    "description": "Find your perfect place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626502/1200/800",
    "price": 220,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Idyllic Lakeside Cottage in Ireland",
    "description": "Settle into a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626503/1200/800",
    "price": 300,
    "location": "Galway",
    "country": "Ireland"
  },
  {
    "title": "Vibrant Waterfront Resort in Thailand",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626504/1200/800",
    "price": 1500,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Tranquil Riverside Lodge in South Africa",
    "description": "Witness the beauty of a breathtaking adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626505/1200/800",
    "price": 1000,
    "location": "Kruger National Park",
    "country": "South Africa"
  },
  {
    "title": "Panoramic Mountain Hideaway in Norway",
    "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626506/1200/800",
    "price": 600,
    "location": "Fjords region",
    "country": "Norway"
  },
  {
    "title": "Exquisite Penthouse in Dubai",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626507/1200/800",
    "price": 4800,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Luxury Yacht in Greece",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626508/1200/800",
    "price": 4000,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Serene City Apartment in Berlin",
    "description": "Unwind in your dream urban place, close to all the action.",
    "image": "https://picsum.photos/seed/972626509/1200/800",
    "price": 200,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Family-friendly Townhouse in Australia",
    "description": "Experience your dream place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626510/1200/800",
    "price": 400,
    "location": "Melbourne",
    "country": "Australia"
  },
  {
    "title": "Bright Countryside Cottage in New Zealand",
    "description": "Enjoy a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626511/1200/800",
    "price": 350,
    "location": "Rotorua",
    "country": "New Zealand"
  },
  {
    "title": "Rustic Ski Chalet in Swiss Alps",
    "description": "Discover a unique adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626512/1200/800",
    "price": 3000,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Cozy Beachfront Cottage in UK",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626513/1200/800",
    "price": 280,
    "location": "Cornwall",
    "country": "UK"
  },
  {
    "title": "Modern Loft in New York City",
    "description": "Settle into a breathtaking place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626514/1200/800",
    "price": 600,
    "location": "New York City",
    "country": "USA"
  },
  {
    "title": "Spacious Desert Retreat in Morocco",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626515/1200/800",
    "price": 450,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Charming Safari Lodge in Tanzania",
    "description": "Witness the beauty of a breathtaking adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626516/1200/800",
    "price": 2200,
    "location": "Serengeti National Park",
    "country": "Tanzania"
  },
  {
    "title": "Idyllic Vineyard Stay in Portugal",
    "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626517/1200/800",
    "price": 320,
    "location": "Porto",
    "country": "Portugal"
  },
  {
    "title": "Vibrant Apartment in Amsterdam",
    "description": "Find your perfect urban retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626518/1200/800",
    "price": 200,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Tranquil Island Resort in Fiji",
    "description": "Unwind in your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626519/1200/800",
    "price": 2800,
    "location": "Yasawa Islands",
    "country": "Fiji"
  },
  {
    "title": "Panoramic Mountain Villa in Italy",
    "description": "Experience this stunning exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626520/1200/800",
    "price": 3500,
    "location": "Dolomites",
    "country": "Italy"
  },
  {
    "title": "Exquisite Chateau in France",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626521/1200/800",
    "price": 1800,
    "location": "Loire Valley",
    "country": "France"
  },
  {
    "title": "Luxury City Hotel in Tokyo",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626522/1200/800",
    "price": 800,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Serene Guest House in Croatia",
    "description": "Enjoy a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626523/1200/800",
    "price": 250,
    "location": "Split",
    "country": "Croatia"
  },
  {
    "title": "Family-friendly Townhouse in Mexico",
    "description": "Unwind in your dream place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626524/1200/800",
    "price": 300,
    "location": "San Miguel de Allende",
    "country": "Mexico"
  },
  {
    "title": "Bright Studio in Rome",
    "description": "Find your perfect place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626525/1200/800",
    "price": 120,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Rustic Farmhouse in Ireland",
    "description": "Experience your dream home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626526/1200/800",
    "price": 300,
    "location": "Cliffs of Moher area",
    "country": "Ireland"
  },
  {
    "title": "Cozy Apartment in Barcelona",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626527/1200/800",
    "price": 180,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Modern Beachfront Bungalow in Thailand",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626528/1200/800",
    "price": 600,
    "location": "Krabi",
    "country": "Thailand"
  },
  {
    "title": "Spacious Lakefront Cabin in Canada",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626529/1200/800",
    "price": 700,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Chic City Loft in London",
    "description": "Experience the ultimate urban place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626530/1200/800",
    "price": 500,
    "location": "London",
    "country": "UK"
  },
  {
    "title": "Idyllic A-Frame Home in Norway",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626531/1200/800",
    "price": 450,
    "location": "Fjords region",
    "country": "Norway"
  },
  {
    "title": "Vibrant Waterfront Retreat in Sweden",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626532/1200/800",
    "price": 800,
    "location": "Stockholm",
    "country": "Sweden"
  },
  {
    "title": "Tranquil Desert Retreat in Egypt",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626533/1200/800",
    "price": 600,
    "location": "Sharm El Sheikh",
    "country": "Egypt"
  },
  {
    "title": "Panoramic Mountain View Chalet in Switzerland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626534/1200/800",
    "price": 3800,
    "location": "Verbier",
    "country": "Switzerland"
  },
  {
    "title": "Exquisite Lodge in Botswana Okavango Delta",
    "description": "Discover a unique adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626535/1200/800",
    "price": 2800,
    "location": "Okavango Delta",
    "country": "Botswana"
  },
  {
    "title": "Luxury Ski Chalet in France",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626536/1200/800",
    "price": 4200,
    "location": "Chamonix",
    "country": "France"
  },
  {
    "title": "Serene Beachfront Property in Thailand",
    "description": "Unwind in your dream paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626537/1200/800",
    "price": 1800,
    "location": "Koh Lanta",
    "country": "Thailand"
  },
  {
    "title": "Family-friendly Home in Australia",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626538/1200/800",
    "price": 450,
    "location": "Perth",
    "country": "Australia"
  },
  {
    "title": "Bright Urban Apartment in Germany",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626539/1200/800",
    "price": 160,
    "location": "Hamburg",
    "country": "Germany"
  },
  {
    "title": "Rustic Riverside Retreat in Argentina",
    "description": "Enjoy a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626540/1200/800",
    "price": 400,
    "location": "Bariloche",
    "country": "Argentina"
  },
  {
    "title": "Cozy Cottages in Greece",
    "description": "Settle into a comfortable and private home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626541/1200/800",
    "price": 250,
    "location": "Crete",
    "country": "Greece"
  },
  {
    "title": "Modern Beachfront Villa in Portugal",
    "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626542/1200/800",
    "price": 900,
    "location": "Algarve",
    "country": "Portugal"
  },
  {
    "title": "Spacious Historic Home in Spain",
    "description": "Unwind in your dream historic dwelling with modern comforts.",
    "image": "https://picsum.photos/seed/972626543/1200/800",
    "price": 700,
    "location": "Seville",
    "country": "Spain"
  },
  {
    "title": "Chic City Apartment in Milan",
    "description": "Experience your dream urban place, close to all the action.",
    "image": "https://picsum.photos/seed/972626544/1200/800",
    "price": 400,
    "location": "Milan",
    "country": "Italy"
  },
  {
    "title": "Idyllic Vineyard Stay in France",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626545/1200/800",
    "price": 380,
    "location": "Bordeaux",
    "country": "France"
  },
  {
    "title": "Vibrant Ski Lodge in US",
    "description": "Witness the beauty of a breathtaking adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626546/1200/800",
    "price": 900,
    "location": "Aspen",
    "country": "USA"
  },
  {
    "title": "Tranquil Island Bungalow in Vietnam",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626547/1200/800",
    "price": 180,
    "location": "Ha Long Bay",
    "country": "Vietnam"
  },
  {
    "title": "Panoramic Mountain Cottage in New Zealand",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626548/1200/800",
    "price": 550,
    "location": "Fiordland National Park",
    "country": "New Zealand"
  },
  {
    "title": "Exquisite Desert Resort in Morocco",
    "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626549/1200/800",
    "price": 2500,
    "location": "Fes",
    "country": "Morocco"
  },
  {
    "title": "Luxury River Cruise Houseboat in Egypt",
    "description": "Unwind in your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626550/1200/800",
    "price": 1200,
    "location": "Aswan",
    "country": "Egypt"
  },
  {
    "title": "Serene Mountain Retreat in Switzerland",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626551/1200/800",
    "price": 2000,
    "location": "Interlaken",
    "country": "Switzerland"
  },
  {
    "title": "Family-friendly Villa in Croatia",
    "description": "Enjoy a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626552/1200/800",
    "price": 900,
    "location": "Dubrovnik",
    "country": "Croatia"
  },
  {
    "title": "Bright Urban Studio in Japan",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626553/1200/800",
    "price": 300,
    "location": "Osaka",
    "country": "Japan"
  },
  {
    "title": "Rustic Treehouse in Sweden",
    "description": "Find your perfect unique retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626554/1200/800",
    "price": 400,
    "location": "Lapland",
    "country": "Sweden"
  },
  {
    "title": "Cozy Townhouse in Dublin",
    "description": "Unwind in your dream urban place, close to all the action.",
    "image": "https://picsum.photos/seed/972626555/1200/800",
    "price": 350,
    "location": "Dublin",
    "country": "Ireland"
  },
  {
    "title": "Modern Waterside Retreat in Denmark",
    "description": "Settle into a breathtaking place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626556/1200/800",
    "price": 400,
    "location": "Copenhagen",
    "country": "Denmark"
  },
  {
    "title": "Spacious Island Villa in Greece",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626557/1200/800",
    "price": 1800,
    "location": "Mykonos",
    "country": "Greece"
  },
  {
    "title": "Chic City Penthouse in Melbourne",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626558/1200/800",
    "price": 4000,
    "location": "Melbourne",
    "country": "Australia"
  },
  {
    "title": "Idyllic Country Cottage in UK",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626559/1200/800",
    "price": 280,
    "location": "Lake District",
    "country": "UK"
  },
  {
    "title": "Vibrant Beachfront Condo in Australia",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626560/1200/800",
    "price": 950,
    "location": "Gold Coast",
    "country": "Australia"
  },
  {
    "title": "Tranquil Desert Glamping Tent in UAE",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626561/1200/800",
    "price": 600,
    "location": "Abu Dhabi",
    "country": "UAE"
  },
  {
    "title": "Panoramic City View Apartment in Berlin",
    "description": "Immerse yourself in this unique urban retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626562/1200/800",
    "price": 280,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Exquisite Private Villa in Bali",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626563/1200/800",
    "price": 1800,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Luxury Safari Lodge in South Africa",
    "description": "Find your perfect adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626564/1200/800",
    "price": 2500,
    "location": "Kruger National Park",
    "country": "South Africa"
  },
  {
    "title": "Serene Guest House in Vietnam",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626565/1200/800",
    "price": 120,
    "location": "Hoi An",
    "country": "Vietnam"
  },
  {
    "title": "Family-friendly Townhouse in Mexico",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626566/1200/800",
    "price": 350,
    "location": "Cancun",
    "country": "Mexico"
  },
  {
    "title": "Bright Loft in Rome",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626567/1200/800",
    "price": 180,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Rustic Ski Chalet in US",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626568/1200/800",
    "price": 2500,
    "location": "Aspen",
    "country": "USA"
  },
  {
    "title": "Cozy Lakefront Cabin in Finland",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626569/1200/800",
    "price": 450,
    "location": "Lake Saimaa",
    "country": "Finland"
  },
  {
    "title": "Modern Villa in Portugal",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626570/1200/800",
    "price": 800,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "Spacious Historic Villa in Greece",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626571/1200/800",
    "price": 1200,
    "location": "Rhodes",
    "country": "Greece"
  },
  {
    "title": "Chic City Pad in Copenhagen",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626572/1200/800",
    "price": 280,
    "location": "Copenhagen",
    "country": "Denmark"
  },
  {
    "title": "Idyllic A-Frame Home in New Zealand",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626573/1200/800",
    "price": 380,
    "location": "Fiordland National Park",
    "country": "New Zealand"
  },
  {
    "title": "Vibrant Apartment in Barcelona",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626574/1200/800",
    "price": 220,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Tranquil Island Villa in Indonesia",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626575/1200/800",
    "price": 700,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Panoramic Mountain View Home in Norway",
    "description": "Immerse yourself in this unique mountain retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626576/1200/800",
    "price": 950,
    "location": "Bergen",
    "country": "Norway"
  },
  {
    "title": "Exquisite Castle in Ireland",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626577/1200/800",
    "price": 3800,
    "location": "Dublin outskirts",
    "country": "Ireland"
  },
  {
    "title": "Luxury Yacht Charter in France",
    "description": "Find your perfect adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626578/1200/800",
    "price": 4500,
    "location": "Nice",
    "country": "France"
  },
  {
    "title": "Serene Boutique Hotel in Thailand",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626579/1200/800",
    "price": 500,
    "location": "Chiang Mai",
    "country": "Thailand"
  },
  {
    "title": "Family-friendly Townhouse in Australia",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626580/1200/800",
    "price": 380,
    "location": "Perth",
    "country": "Australia"
  },
  {
    "title": "Bright Urban Apartment in Germany",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626581/1200/800",
    "price": 160,
    "location": "Hamburg",
    "country": "Germany"
  },
  {
    "title": "Rustic Farm Stay in Argentina",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626582/1200/800",
    "price": 350,
    "location": "Bariloche",
    "country": "Argentina"
  },
  {
    "title": "Cozy Beachfront Bungalow in Mexico",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626583/1200/800",
    "price": 250,
    "location": "Tulum",
    "country": "Mexico"
  },
  {
    "title": "Modern Lakeside Retreat in US",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626584/1200/800",
    "price": 800,
    "location": "Seattle",
    "country": "USA"
  },
  {
    "title": "Spacious Desert Oasis in Egypt",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626585/1200/800",
    "price": 500,
    "location": "Sharm El Sheikh",
    "country": "Egypt"
  },
  {
    "title": "Chic City Loft in London",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626586/1200/800",
    "price": 500,
    "location": "London",
    "country": "UK"
  },
  {
    "title": "Idyllic A-Frame Cabin in Finland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626587/1200/800",
    "price": 380,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Vibrant Apartment in Amsterdam",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626588/1200/800",
    "price": 200,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Tranquil Island Resort in Fiji",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626589/1200/800",
    "price": 2800,
    "location": "Nadi",
    "country": "Fiji"
  },
  {
    "title": "Panoramic Mountain Retreat in Norway",
    "description": "Immerse yourself in this unique mountain retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626590/1200/800",
    "price": 900,
    "location": "Fjords region",
    "country": "Norway"
  },
  {
    "title": "Exquisite Ski-in Chalet in Switzerland",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626591/1200/800",
    "price": 4000,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Luxury Country Estate in Italy",
    "description": "Find your perfect adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626592/1200/800",
    "price": 2200,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Serene Guest House in Croatia",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626593/1200/800",
    "price": 280,
    "location": "Hvar",
    "country": "Croatia"
  },
  {
    "title": "Family-friendly Townhouse in Mexico",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626594/1200/800",
    "price": 380,
    "location": "Puerto Vallarta",
    "country": "Mexico"
  },
  {
    "title": "Bright Loft in Rome",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626595/1200/800",
    "price": 180,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Rustic Riverfront Cabin in USA",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626596/1200/800",
    "price": 400,
    "location": "New Orleans",
    "country": "USA"
  },
  {
    "title": "Cozy Island Bungalow in Indonesia",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626597/1200/800",
    "price": 200,
    "location": "Gili Islands",
    "country": "Indonesia"
  },
  {
    "title": "Modern Safari Camp in South Africa",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626598/1200/800",
    "price": 1200,
    "location": "Garden Route",
    "country": "South Africa"
  },
  {
    "title": "Spacious Beachfront Resort in Thailand",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626599/1200/800",
    "price": 2000,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Chic City Penthouse in Melbourne",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626600/1200/800",
    "price": 4200,
    "location": "Melbourne",
    "country": "Australia"
  },
  {
    "title": "Idyllic A-Frame Home in Finland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626601/1200/800",
    "price": 400,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Vibrant Waterside Apartment in Sydney",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626602/1200/800",
    "price": 450,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Tranquil Island Resort in Fiji",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626603/1200/800",
    "price": 2800,
    "location": "Nadi",
    "country": "Fiji"
  },
  {
    "title": "Panoramic Mountain View Home in Norway",
    "description": "Immerse yourself in this unique mountain retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626604/1200/800",
    "price": 950,
    "location": "Bergen",
    "country": "Norway"
  },
  {
    "title": "Exquisite Castle in Ireland",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626605/1200/800",
    "price": 3800,
    "location": "Dublin outskirts",
    "country": "Ireland"
  },
  {
    "title": "Luxury Yacht Charter in France",
    "description": "Find your perfect adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626606/1200/800",
    "price": 4500,
    "location": "Nice",
    "country": "France"
  },
  {
    "title": "Serene Boutique Hotel in Thailand",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626607/1200/800",
    "price": 500,
    "location": "Chiang Mai",
    "country": "Thailand"
  },
  {
    "title": "Family-friendly Townhouse in Australia",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626608/1200/800",
    "price": 380,
    "location": "Perth",
    "country": "Australia"
  },
  {
    "title": "Bright Urban Apartment in Germany",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626609/1200/800",
    "price": 160,
    "location": "Hamburg",
    "country": "Germany"
  },
  {
    "title": "Rustic Farm Stay in Argentina",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626610/1200/800",
    "price": 350,
    "location": "Bariloche",
    "country": "Argentina"
  },
  {
    "title": "Cozy Beachfront Bungalow in Mexico",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626611/1200/800",
    "price": 250,
    "location": "Tulum",
    "country": "Mexico"
  },
  {
    "title": "Modern Lakeside Retreat in US",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626612/1200/800",
    "price": 800,
    "location": "Seattle",
    "country": "USA"
  },
  {
    "title": "Spacious Desert Oasis in Egypt",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626613/1200/800",
    "price": 500,
    "location": "Sharm El Sheikh",
    "country": "Egypt"
  },
  {
    "title": "Chic City Loft in London",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626614/1200/800",
    "price": 500,
    "location": "London",
    "country": "UK"
  },
  {
    "title": "Idyllic A-Frame Cabin in Finland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626615/1200/800",
    "price": 380,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Vibrant Apartment in Amsterdam",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626616/1200/800",
    "price": 200,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Tranquil Island Resort in Fiji",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626617/1200/800",
    "price": 2800,
    "location": "Nadi",
    "country": "Fiji"
  },
  {
    "title": "Panoramic Mountain Retreat in Norway",
    "description": "Immerse yourself in this unique mountain retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626618/1200/800",
    "price": 950,
    "location": "Bergen",
    "country": "Norway"
  },
  {
    "title": "Exquisite Ski-in Chalet in Switzerland",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626619/1200/800",
    "price": 4000,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Luxury Country Estate in Italy",
    "description": "Find your perfect adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626620/1200/800",
    "price": 2200,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Serene Guest House in Croatia",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626621/1200/800",
    "price": 280,
    "location": "Hvar",
    "country": "Croatia"
  },
  {
    "title": "Family-friendly Townhouse in Mexico",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626622/1200/800",
    "price": 380,
    "location": "Puerto Vallarta",
    "country": "Mexico"
  },
  {
    "title": "Bright Loft in Rome",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626623/1200/800",
    "price": 180,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Rustic Riverfront Cabin in USA",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626624/1200/800",
    "price": 400,
    "location": "New Orleans",
    "country": "USA"
  },
  {
    "title": "Cozy Island Bungalow in Indonesia",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626625/1200/800",
    "price": 200,
    "location": "Gili Islands",
    "country": "Indonesia"
  },
  {
    "title": "Modern Safari Camp in South Africa",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626626/1200/800",
    "price": 1200,
    "location": "Garden Route",
    "country": "South Africa"
  },
  {
    "title": "Spacious Beachfront Resort in Thailand",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626627/1200/800",
    "price": 2000,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Chic City Penthouse in Melbourne",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626628/1200/800",
    "price": 4200,
    "location": "Melbourne",
    "country": "Australia"
  },
  {
    "title": "Idyllic A-Frame Home in Finland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626629/1200/800",
    "price": 380,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Vibrant Waterside Apartment in Sydney",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626630/1200/800",
    "price": 450,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Tranquil Island Resort in Fiji",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626631/1200/800",
    "price": 2800,
    "location": "Nadi",
    "country": "Fiji"
  },
  {
    "title": "Panoramic Mountain View Home in Norway",
    "description": "Immerse yourself in this unique mountain retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626632/1200/800",
    "price": 950,
    "location": "Bergen",
    "country": "Norway"
  },
  {
    "title": "Exquisite Castle in Ireland",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626633/1200/800",
    "price": 3800,
    "location": "Dublin outskirts",
    "country": "Ireland"
  },
  {
    "title": "Luxury Yacht Charter in France",
    "description": "Find your perfect adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626634/1200/800",
    "price": 4500,
    "location": "Nice",
    "country": "France"
  },
  {
    "title": "Serene Boutique Hotel in Thailand",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626635/1200/800",
    "price": 500,
    "location": "Chiang Mai",
    "country": "Thailand"
  },
  {
    "title": "Family-friendly Townhouse in Australia",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626636/1200/800",
    "price": 380,
    "location": "Perth",
    "country": "Australia"
  },
  {
    "title": "Bright Urban Apartment in Germany",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626637/1200/800",
    "price": 160,
    "location": "Hamburg",
    "country": "Germany"
  },
  {
    "title": "Rustic Farm Stay in Argentina",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626638/1200/800",
    "price": 350,
    "location": "Bariloche",
    "country": "Argentina"
  },
  {
    "title": "Cozy Beachfront Bungalow in Mexico",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626639/1200/800",
    "price": 250,
    "location": "Tulum",
    "country": "Mexico"
  },
  {
    "title": "Modern Lakeside Retreat in US",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626640/1200/800",
    "price": 800,
    "location": "Seattle",
    "country": "USA"
  },
  {
    "title": "Spacious Desert Oasis in Egypt",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626641/1200/800",
    "price": 500,
    "location": "Sharm El Sheikh",
    "country": "Egypt"
  },
  {
    "title": "Chic City Loft in London",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626642/1200/800",
    "price": 500,
    "location": "London",
    "country": "UK"
  },
  {
    "title": "Idyllic A-Frame Cabin in Finland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626643/1200/800",
    "price": 380,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Vibrant Apartment in Amsterdam",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626644/1200/800",
    "price": 200,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Tranquil Island Resort in Fiji",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626645/1200/800",
    "price": 2800,
    "location": "Nadi",
    "country": "Fiji"
  },
  {
    "title": "Panoramic Mountain Retreat in Norway",
    "description": "Immerse yourself in this unique mountain retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626646/1200/800",
    "price": 950,
    "location": "Bergen",
    "country": "Norway"
  },
  {
    "title": "Exquisite Ski-in Chalet in Switzerland",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626647/1200/800",
    "price": 4000,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Luxury Country Estate in Italy",
    "description": "Find your perfect adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626648/1200/800",
    "price": 2200,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Serene Guest House in Croatia",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626649/1200/800",
    "price": 280,
    "location": "Hvar",
    "country": "Croatia"
  },
  {
    "title": "Family-friendly Townhouse in Mexico",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626650/1200/800",
    "price": 380,
    "location": "Puerto Vallarta",
    "country": "Mexico"
  },
  {
    "title": "Bright Loft in Rome",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626651/1200/800",
    "price": 180,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Rustic Riverfront Cabin in USA",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626652/1200/800",
    "price": 400,
    "location": "New Orleans",
    "country": "USA"
  },
  {
    "title": "Cozy Island Bungalow in Indonesia",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626653/1200/800",
    "price": 200,
    "location": "Gili Islands",
    "country": "Indonesia"
  },
  {
    "title": "Modern Safari Camp in South Africa",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626654/1200/800",
    "price": 1200,
    "location": "Garden Route",
    "country": "South Africa"
  },
  {
    "title": "Spacious Beachfront Resort in Thailand",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626655/1200/800",
    "price": 2000,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Chic City Penthouse in Melbourne",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626656/1200/800",
    "price": 4200,
    "location": "Melbourne",
    "country": "Australia"
  },
  {
    "title": "Idyllic A-Frame Home in Finland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626657/1200/800",
    "price": 380,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Vibrant Waterside Apartment in Sydney",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626658/1200/800",
    "price": 450,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Tranquil Island Resort in Fiji",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626659/1200/800",
    "price": 2800,
    "location": "Nadi",
    "country": "Fiji"
  },
  {
    "title": "Panoramic Mountain View Home in Norway",
    "description": "Immerse yourself in this unique mountain retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626660/1200/800",
    "price": 950,
    "location": "Bergen",
    "country": "Norway"
  },
  {
    "title": "Exquisite Castle in Ireland",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626661/1200/800",
    "price": 3800,
    "location": "Dublin outskirts",
    "country": "Ireland"
  },
  {
    "title": "Luxury Yacht Charter in France",
    "description": "Find your perfect adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626662/1200/800",
    "price": 4500,
    "location": "Nice",
    "country": "France"
  },
  {
    "title": "Serene Boutique Hotel in Thailand",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626663/1200/800",
    "price": 500,
    "location": "Chiang Mai",
    "country": "Thailand"
  },
  {
    "title": "Family-friendly Townhouse in Australia",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626664/1200/800",
    "price": 380,
    "location": "Perth",
    "country": "Australia"
  },
  {
    "title": "Bright Urban Apartment in Germany",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626665/1200/800",
    "price": 160,
    "location": "Hamburg",
    "country": "Germany"
  },
  {
    "title": "Rustic Farm Stay in Argentina",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626666/1200/800",
    "price": 350,
    "location": "Bariloche",
    "country": "Argentina"
  },
  {
    "title": "Cozy Beachfront Bungalow in Mexico",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626667/1200/800",
    "price": 250,
    "location": "Tulum",
    "country": "Mexico"
  },
  {
    "title": "Modern Lakeside Retreat in US",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626668/1200/800",
    "price": 800,
    "location": "Seattle",
    "country": "USA"
  },
  {
    "title": "Spacious Desert Oasis in Egypt",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626669/1200/800",
    "price": 500,
    "location": "Sharm El Sheikh",
    "country": "Egypt"
  },
  {
    "title": "Chic City Loft in London",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626670/1200/800",
    "price": 500,
    "location": "London",
    "country": "UK"
  },
  {
    "title": "Idyllic A-Frame Cabin in Finland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626671/1200/800",
    "price": 380,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Vibrant Apartment in Amsterdam",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626672/1200/800",
    "price": 200,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Tranquil Island Resort in Fiji",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626673/1200/800",
    "price": 2800,
    "location": "Nadi",
    "country": "Fiji"
  },
  {
    "title": "Panoramic Mountain Retreat in Norway",
    "description": "Immerse yourself in this unique mountain retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626674/1200/800",
    "price": 950,
    "location": "Bergen",
    "country": "Norway"
  },
  {
    "title": "Exquisite Ski-in Chalet in Switzerland",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626675/1200/800",
    "price": 4000,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Luxury Country Estate in Italy",
    "description": "Find your perfect adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626676/1200/800",
    "price": 2200,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Serene Guest House in Croatia",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626677/1200/800",
    "price": 280,
    "location": "Hvar",
    "country": "Croatia"
  },
  {
    "title": "Family-friendly Townhouse in Mexico",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626678/1200/800",
    "price": 380,
    "location": "Puerto Vallarta",
    "country": "Mexico"
  },
  {
    "title": "Bright Loft in Rome",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626679/1200/800",
    "price": 180,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Rustic Riverfront Cabin in USA",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626680/1200/800",
    "price": 400,
    "location": "New Orleans",
    "country": "USA"
  },
  {
    "title": "Cozy Island Bungalow in Indonesia",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626681/1200/800",
    "price": 200,
    "location": "Gili Islands",
    "country": "Indonesia"
  },
  {
    "title": "Modern Safari Camp in South Africa",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626682/1200/800",
    "price": 1200,
    "location": "Garden Route",
    "country": "South Africa"
  },
  {
    "title": "Spacious Beachfront Resort in Thailand",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626683/1200/800",
    "price": 2000,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Chic City Penthouse in Melbourne",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626684/1200/800",
    "price": 4200,
    "location": "Melbourne",
    "country": "Australia"
  },
  {
    "title": "Idyllic A-Frame Home in Finland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626685/1200/800",
    "price": 380,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Vibrant Waterside Apartment in Sydney",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626686/1200/800",
    "price": 450,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Tranquil Island Resort in Fiji",
    "description": "Experience your dream oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626687/1200/800",
    "price": 2800,
    "location": "Nadi",
    "country": "Fiji"
  },
  {
    "title": "Panoramic Mountain Retreat in Norway",
    "description": "Immerse yourself in this unique mountain retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626688/1200/800",
    "price": 950,
    "location": "Bergen",
    "country": "Norway"
  },
  {
    "title": "Exquisite Castle in Ireland",
    "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
    "image": "https://picsum.photos/seed/972626689/1200/800",
    "price": 3800,
    "location": "Dublin outskirts",
    "country": "Ireland"
  },
  {
    "title": "Luxury Yacht Charter in France",
    "description": "Find your perfect adventure hub, close to all the action.",
    "image": "https://picsum.photos/seed/972626690/1200/800",
    "price": 4500,
    "location": "Nice",
    "country": "France"
  },
  {
    "title": "Serene Boutique Hotel in Thailand",
    "description": "Settle into a comfortable and private place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626691/1200/800",
    "price": 500,
    "location": "Chiang Mai",
    "country": "Thailand"
  },
  {
    "title": "Family-friendly Townhouse in Australia",
    "description": "Enjoy the ultimate escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626692/1200/800",
    "price": 380,
    "location": "Perth",
    "country": "Australia"
  },
  {
    "title": "Bright Urban Apartment in Germany",
    "description": "Experience this stunning city pad, close to all the action.",
    "image": "https://picsum.photos/seed/972626693/1200/800",
    "price": 160,
    "location": "Hamburg",
    "country": "Germany"
  },
  {
    "title": "Rustic Farm Stay in Argentina",
    "description": "Find your perfect retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626694/1200/800",
    "price": 350,
    "location": "Bariloche",
    "country": "Argentina"
  },
  {
    "title": "Cozy Beachfront Bungalow in Mexico",
    "description": "Unwind in your dream escape, offering peace and tranquility.",
    "image": "https://picsum.photos/seed/972626695/1200/800",
    "price": 250,
    "location": "Tulum",
    "country": "Mexico"
  },
  {
    "title": "Modern Lakeside Retreat in US",
    "description": "Settle into a breathtaking retreat, perfect for relaxation or exploration.",
    "image": "https://picsum.photos/seed/972626696/1200/800",
    "price": 800,
    "location": "Seattle",
    "country": "USA"
  },
  {
    "title": "Spacious Desert Oasis in Egypt",
    "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
    "image": "https://picsum.photos/seed/972626697/1200/800",
    "price": 500,
    "location": "Sharm El Sheikh",
    "country": "Egypt"
  },
  {
    "title": "Chic City Loft in London",
    "description": "Witness the beauty of a breathtaking oasis amidst stunning natural beauty.",
    "image": "https://picsum.photos/seed/972626698/1200/800",
    "price": 500,
    "location": "London",
    "country": "UK"
  },
  {
    "title": "Idyllic A-Frame Cabin in Finland",
    "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
    "image": "https://picsum.photos/seed/972626699/1200/800",
    "price": 380,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Vibrant Apartment in Amsterdam",
    "description": "Find your perfect paradise for families and friends.",
    "image": "https://picsum.photos/seed/972626700/1200/800",
    "price": 200,
    "location": "Amsterdam",
    "country": "Netherlands"
  }
];

module.exports = { data: sampleListings }; 




// const sampleListings = [
//   {
//     "title": "Rustic Cabin in Lake District",
//     "description": "Escape to a cozy yet spacious home away from home, packed with amenities.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 310,
//     "location": "Lake District",
//     "country": "UK"
//   },
//   {
//     "title": "Cozy City Studio in Amsterdam",
//     "description": "Experience this stunning charming space in a vibrant neighborhood.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 125,
//     "location": "Amsterdam",
//     "country": "Netherlands"
//   },
//   {
//     "title": "Modern Beachfront Villa in Phuket",
//     "description": "Unwind in your dream paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1100,
//     "location": "Phuket",
//     "country": "Thailand"
//   },
//   {
//     "title": "Luxury Penthouse in New York City",
//     "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 4800,
//     "location": "New York City",
//     "country": "USA"
//   },
//   {
//     "title": "Charming Guest House in Provence",
//     "description": "Settle into a comfortable and private retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 270,
//     "location": "Provence",
//     "country": "France"
//   },
//   {
//     "title": "Secluded Chalet in Verbier",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3900,
//     "location": "Verbier",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Rustic Farmhouse in Tuscany",
//     "description": "Enjoy the ultimate escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 280,
//     "location": "Tuscany",
//     "country": "Italy"
//   },
//   {
//     "title": "Bright Apartment in Barcelona",
//     "description": "Find your perfect place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 160,
//     "location": "Barcelona",
//     "country": "Spain"
//   },
//   {
//     "title": "Spacious Safari Lodge in Kruger National Park",
//     "description": "Witness the beauty of a breathtaking adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1800,
//     "location": "Kruger National Park",
//     "country": "South Africa"
//   },
//   {
//     "title": "Historic Townhouse in Edinburgh",
//     "description": "Experience this stunning historic dwelling with modern comforts.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 320,
//     "location": "Edinburgh",
//     "country": "UK"
//   },
//   {
//     "title": "Tranquil Island Bungalow in Bali",
//     "description": "Unwind in your dream escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "Bali",
//     "country": "Indonesia"
//   },
//   {
//     "title": "Vibrant City Loft in Tokyo",
//     "description": "Discover a unique urban retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 350,
//     "location": "Tokyo",
//     "country": "Japan"
//   },
//   {
//     "title": "Idyllic Beachfront Cottage in Maui",
//     "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 750,
//     "location": "Maui",
//     "country": "USA"
//   },
//   {
//     "title": "Panoramic Mountain View Cabin in Banff",
//     "description": "Settle into a breathtaking gateway with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 600,
//     "location": "Banff",
//     "country": "Canada"
//   },
//   {
//     "title": "Exquisite Hotel in Rome",
//     "description": "Enjoy the ultimate luxury stay, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 500,
//     "location": "Rome",
//     "country": "Italy"
//   },
//   {
//     "title": "Luxury Yacht in the Amalfi Coast",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 4500,
//     "location": "Amalfi Coast",
//     "country": "Italy"
//   },
//   {
//     "title": "Serene Guest House in Ha Long Bay",
//     "description": "Find your perfect retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 180,
//     "location": "Ha Long Bay",
//     "country": "Vietnam"
//   },
//   {
//     "title": "Family-friendly Villa in Rio de Janeiro",
//     "description": "Experience your dream paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 650,
//     "location": "Rio de Janeiro",
//     "country": "Brazil"
//   },
//   {
//     "title": "Chic City Pad in Copenhagen",
//     "description": "Unwind in your dream place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 200,
//     "location": "Copenhagen",
//     "country": "Denmark"
//   },
//   {
//     "title": "Unique Treehouse in New Zealand",
//     "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 500,
//     "location": "Fiordland National Park",
//     "country": "New Zealand"
//   },
//   {
//     "title": "Adventure-ready Glamping Tent in Iceland",
//     "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 250,
//     "location": "Golden Circle",
//     "country": "Iceland"
//   },
//   {
//     "title": "Grand Castle in Ireland",
//     "description": "Bask in the serene ambiance of this exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3200,
//     "location": "Dublin",
//     "country": "Ireland"
//   },
//   {
//     "title": "Cozy Chalet in Tyrol",
//     "description": "Enjoy the ultimate ski escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 900,
//     "location": "Tyrol",
//     "country": "Austria"
//   },
//   {
//     "title": "Modern Ski Chalet in Verbier",
//     "description": "Experience this stunning exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 4100,
//     "location": "Verbier",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Rustic Guest House in Hoi An",
//     "description": "Discover a comfortable and private place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 85,
//     "location": "Hoi An",
//     "country": "Vietnam"
//   },
//   {
//     "title": "Spacious Loft in Buenos Aires",
//     "description": "Unwind in your dream urban place, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 250,
//     "location": "Buenos Aires",
//     "country": "Argentina"
//   },
//   {
//     "title": "Tranquil Lakefront Cabin in Sweden",
//     "description": "Find your perfect retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 420,
//     "location": "Stockholm",
//     "country": "Sweden"
//   },
//   {
//     "title": "Vibrant Condo in Playa del Carmen",
//     "description": "Settle into a comfortable and private paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 380,
//     "location": "Playa del Carmen",
//     "country": "Mexico"
//   },
//   {
//     "title": "Idyllic A-Frame in Norway",
//     "description": "Experience your dream escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 520,
//     "location": "Fjords region",
//     "country": "Norway"
//   },
//   {
//     "title": "Panoramic Oceanfront Home in Gold Coast",
//     "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1800,
//     "location": "Gold Coast",
//     "country": "Australia"
//   },
//   {
//     "title": "Exquisite Palace in Jaipur",
//     "description": "Discover this stunning historic dwelling with modern comforts.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 950,
//     "location": "Jaipur",
//     "country": "India"
//   },
//   {
//     "title": "Luxury Private Villa in Split",
//     "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1500,
//     "location": "Split",
//     "country": "Croatia"
//   },
//   {
//     "title": "Serene Oasis in Marrakech",
//     "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "Marrakech",
//     "country": "Morocco"
//   },
//   {
//     "title": "Family-friendly Resort in Athens",
//     "description": "Enjoy the ultimate escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1000,
//     "location": "Athens",
//     "country": "Greece"
//   },
//   {
//     "title": "Bright Holiday Home in Cornawall",
//     "description": "Settle into a comfortable and private home away from home, packed with amenities.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 300,
//     "location": "Cornwall",
//     "country": "UK"
//   },
//   {
//     "title": "Cozy Ski Cabin in Aspen",
//     "description": "Find your perfect mountain retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1100,
//     "location": "Aspen",
//     "country": "USA"
//   },
//   {
//     "title": "Modern Urban Apartment in Berlin",
//     "description": "Discover a unique urban pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 180,
//     "location": "Berlin",
//     "country": "Germany"
//   },
//   {
//     "title": "Spacious Beach House in San Francisco",
//     "description": "Unwind in your dream escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 700,
//     "location": "San Francisco",
//     "country": "USA"
//   },
//   {
//     "title": "Chic Studio in Shibuya",
//     "description": "Experience this stunning city pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 280,
//     "location": "Tokyo",
//     "country": "Japan"
//   },
//   {
//     "title": "Idyllic Farm Stay in Kerala",
//     "description": "Settle into a cozy yet spacious home away from home, packed with amenities.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 230,
//     "location": "Kerala",
//     "country": "India"
//   },
//   {
//     "title": "Vibrant Retreat in Ibiza",
//     "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 900,
//     "location": "Ibiza",
//     "country": "Spain"
//   },
//   {
//     "title": "Tranquil Cliffside Villa in Santorini",
//     "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2000,
//     "location": "Santorini",
//     "country": "Greece"
//   },
//   {
//     "title": "Panoramic Desert Camp in Egypt",
//     "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 500,
//     "location": "Aswan",
//     "country": "Egypt"
//   },
//   {
//     "title": "Exquisite Hotel in Geneva",
//     "description": "Find your perfect luxury experience, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 800,
//     "location": "Geneva",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Luxury Oceanfront Condo in Cape Town",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1300,
//     "location": "Cape Town",
//     "country": "South Africa"
//   },
//   {
//     "title": "Serene Farm Stay in Australia",
//     "description": "Enjoy the ultimate escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "Tasmania",
//     "country": "Australia"
//   },
//   {
//     "title": "Family-friendly Lodge in Canadian Rockies",
//     "description": "Experience your dream adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 850,
//     "location": "Banff",
//     "country": "Canada"
//   },
//   {
//     "title": "Bright Loft in Rome",
//     "description": "Discover a charming space in a vibrant neighborhood.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 190,
//     "location": "Rome",
//     "country": "Italy"
//   },
//   {
//     "title": "Rustic Waterside Cottage in Norway",
//     "description": "Settle into a comfortable and private home away from home, packed with amenities.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 550,
//     "location": "Bergen",
//     "country": "Norway"
//   },
//   {
//     "title": "Cozy Apartment in Barcelona",
//     "description": "Find your perfect urban retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 170,
//     "location": "Barcelona",
//     "country": "Spain"
//   },
//   {
//     "title": "Modern House in Miami Beach",
//     "description": "Unwind in your dream place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 900,
//     "location": "Miami Beach",
//     "country": "USA"
//   },
//   {
//     "title": "Spacious Island Villa in Maldives",
//     "description": "Bask in the serene ambiance of this exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 4500,
//     "location": "Malé Atoll",
//     "country": "Maldives"
//   },
//   {
//     "title": "Chic Penthouse in Mexico City",
//     "description": "Witness the beauty of a breathtaking city pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2800,
//     "location": "Mexico City",
//     "country": "Mexico"
//   },
//   {
//     "title": "Idyllic Lakeside Retreat in Ireland",
//     "description": "Escape to a cozy yet spacious oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 380,
//     "location": "Galway",
//     "country": "Ireland"
//   },
//   {
//     "title": "Vibrant Apartment in Frankfurt",
//     "description": "Discover your dream urban retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 210,
//     "location": "Frankfurt",
//     "country": "Germany"
//   },
//   {
//     "title": "Tranquil Desert Retreat in Chefchaouen",
//     "description": "Settle into a comfortable and private place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 300,
//     "location": "Chefchaouen",
//     "country": "Morocco"
//   },
//   {
//     "title": "Panoramic Mountain View Resort in Dolomites",
//     "description": "Experience the ultimate exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2800,
//     "location": "Dolomites",
//     "country": "Italy"
//   },
//   {
//     "title": "Exquisite Winery Stay in Mendoza",
//     "description": "Find your perfect escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 600,
//     "location": "Mendoza",
//     "country": "Argentina"
//   },
//   {
//     "title": "Luxury Yacht in the Caribbean",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 4800,
//     "location": "Caribbean Sea",
//     "country": "Caribbean"
//   },
//   {
//     "title": "Serene Cottage in Hokkaido",
//     "description": "Enjoy the ultimate getaway with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 380,
//     "location": "Hokkaido",
//     "country": "Japan"
//   },
//   {
//     "title": "Family-friendly Townhouse in Ho Chi Minh City",
//     "description": "Discover a charming space in a vibrant neighborhood.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 220,
//     "location": "Ho Chi Minh City",
//     "country": "Vietnam"
//   },
//   {
//     "title": "Bright Ski Condo in Verbier",
//     "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 980,
//     "location": "Verbier",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Rustic Lakefront Cabin in Zurich",
//     "description": "Experience your dream escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 450,
//     "location": "Zurich",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Cozy Treehouse in California",
//     "description": "Find your perfect oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 300,
//     "location": "Northern California",
//     "country": "USA"
//   },
//   {
//     "title": "Modern Desert Villa in Palm Springs",
//     "description": "Unwind in your dream oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1000,
//     "location": "Palm Springs",
//     "country": "USA"
//   },
//   {
//     "title": "Spacious Coastal Villa in Santorini",
//     "description": "Discover a breathtaking exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2100,
//     "location": "Santorini",
//     "country": "Greece"
//   },
//   {
//     "title": "Chic City Penthouse in São Paulo",
//     "description": "Settle into a breathtaking city pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3500,
//     "location": "São Paulo",
//     "country": "Brazil"
//   },
//   {
//     "title": "Idyllic Country House in Cornwall",
//     "description": "Experience this stunning historic dwelling with modern comforts.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 290,
//     "location": "Cornwall",
//     "country": "UK"
//   },
//   {
//     "title": "Vibrant Hostel in Lisbon",
//     "description": "Enjoy a comfortable and private place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 80,
//     "location": "Lisbon",
//     "country": "Portugal"
//   },
//   {
//     "title": "Tranquil Retreat in Boracay",
//     "description": "Find your perfect paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 800,
//     "location": "Boracay Island",
//     "country": "Philippines"
//   },
//   {
//     "title": "Panoramic Ski Chalet in Swiss Alps",
//     "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3800,
//     "location": "Zermatt",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Exquisite Villa in Amalfi Coast",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3200,
//     "location": "Amalfi Coast",
//     "country": "Italy"
//   },
//   {
//     "title": "Luxury Safari Camp in Serengeti National Park",
//     "description": "Unwind in the ultimate adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2500,
//     "location": "Serengeti National Park",
//     "country": "Tanzania"
//   },
//   {
//     "title": "Serene Riverside Bungalow in Goa",
//     "description": "Discover a comfortable and private retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 190,
//     "location": "Goa",
//     "country": "India"
//   },
//   {
//     "title": "Family-friendly Beachfront Resort in Algarve",
//     "description": "Experience your dream paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1500,
//     "location": "Algarve",
//     "country": "Portugal"
//   },
//   {
//     "title": "Bright Coastal Apartment in Split",
//     "description": "Enjoy the ultimate escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 250,
//     "location": "Split",
//     "country": "Croatia"
//   },
//   {
//     "title": "Rustic Wine Farm Stay in Bordeaux",
//     "description": "Settle into a charming historic dwelling with modern comforts.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "Bordeaux",
//     "country": "France"
//   },
//   {
//     "title": "Cozy Townhouse in Toronto",
//     "description": "Find your perfect urban retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 320,
//     "location": "Toronto",
//     "country": "Canada"
//   },
//   {
//     "title": "Modern Riad in Fes",
//     "description": "Unwind in your dream oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 380,
//     "location": "Fes",
//     "country": "Morocco"
//   },
//   {
//     "title": "Spacious House in Perth",
//     "description": "Discover a comfortable and private place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 450,
//     "location": "Perth",
//     "country": "Australia"
//   },
//   {
//     "title": "Chic Island Bungalow in Gili Islands",
//     "description": "Experience this stunning escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 220,
//     "location": "Gili Islands",
//     "country": "Indonesia"
//   },
//   {
//     "title": "Idyllic A-Frame Home in Reykjavik",
//     "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 490,
//     "location": "Reykjavik",
//     "country": "Iceland"
//   },
//   {
//     "title": "Vibrant Resort in Cancun",
//     "description": "Enjoy the ultimate paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1200,
//     "location": "Cancun",
//     "country": "Mexico"
//   },
//   {
//     "title": "Tranquil Retreat in Cusco",
//     "description": "Find your perfect unique retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 350,
//     "location": "Cusco",
//     "country": "Peru"
//   },
//   {
//     "title": "Panoramic City Apartment in Lucerne",
//     "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 600,
//     "location": "Lucerne",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Exquisite Hotel in Oslo",
//     "description": "Discover this stunning exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 700,
//     "location": "Oslo",
//     "country": "Norway"
//   },
//   {
//     "title": "Luxury Country Estate in Oxfordshire",
//     "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3000,
//     "location": "London",
//     "country": "UK"
//   },
//   {
//     "title": "Serene Boutique Hotel in Kyoto",
//     "description": "Immerse yourself in this unique place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 550,
//     "location": "Kyoto",
//     "country": "Japan"
//   },
//   {
//     "title": "Family-friendly Townhouse in Auckland",
//     "description": "Experience your dream home away from home, packed with amenities.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 420,
//     "location": "Auckland",
//     "country": "New Zealand"
//   },
//   {
//     "title": "Bright Loft in Barcelona",
//     "description": "Enjoy a comfortable and private urban retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 200,
//     "location": "Barcelona",
//     "country": "Spain"
//   },
//   {
//     "title": "Rustic Ski-in Chalet in Val d'Isère",
//     "description": "Find your perfect adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2900,
//     "location": "French Alps",
//     "country": "France"
//   },
//   {
//     "title": "Cozy Lakeside Cabin in Vancouver",
//     "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 580,
//     "location": "Vancouver",
//     "country": "Canada"
//   },
//   {
//     "title": "Modern Farmhouse in Tuscany",
//     "description": "Unwind in your dream retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 650,
//     "location": "Tuscany",
//     "country": "Italy"
//   },
//   {
//     "title": "Spacious Island Villa in Crete",
//     "description": "Settle into a comfortable and private paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1800,
//     "location": "Crete",
//     "country": "Greece"
//   },
//   {
//     "title": "Chic City Apartment in Milan",
//     "description": "Experience this stunning city pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 380,
//     "location": "Milan",
//     "country": "Italy"
//   },
//   {
//     "title": "Idyllic Beach Bungalow in Koh Phi Phi",
//     "description": "Enjoy the ultimate escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "Koh Phi Phi",
//     "country": "Thailand"
//   },
//   {
//     "title": "Vibrant Safari Lodge in Masai Mara",
//     "description": "Find your perfect adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2000,
//     "location": "Masai Mara",
//     "country": "Kenya"
//   },
//   {
//     "title": "Tranquil Oceanfront Retreat in Lisbon",
//     "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 700,
//     "location": "Lisbon",
//     "country": "Portugal"
//   },
//   {
//     "title": "Panoramic City Penthouse in Sydney",
//     "description": "Witness the beauty of a breathtaking city view with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3800,
//     "location": "Sydney",
//     "country": "Australia"
//   },
//   {
//     "title": "Exquisite Palace Hotel in Cairo",
//     "description": "Immerse yourself in this unique historic dwelling with modern comforts.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1000,
//     "location": "Cairo",
//     "country": "Egypt"
//   },
//   {
//     "title": "Luxury Eco-Lodge in Amazon Rainforest",
//     "description": "Unwind in the ultimate oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1200,
//     "location": "Amazon Rainforest",
//     "country": "Brazil"
//   },
//   {
//     "title": "Serene Lakeside Villa in Finland",
//     "description": "Discover a breathtaking retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 700,
//     "location": "Lake Saimaa",
//     "country": "Finland"
//   },
//   {
//     "title": "Family-friendly Condo in Toronto",
//     "description": "Settle into a comfortable and private place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 350,
//     "location": "Toronto",
//     "country": "Canada"
//   },
//   {
//     "title": "Bright River View Apartment in London",
//     "description": "Experience your dream urban place, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 500,
//     "location": "London",
//     "country": "UK"
//   },
//   {
//     "title": "Rustic Country Home in Cotswolds",
//     "description": "Find your perfect escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 300,
//     "location": "Cotswolds",
//     "country": "UK"
//   },
//   {
//     "title": "Cozy Bungalow in Hoi An",
//     "description": "Unwind in your dream home away from home, packed with amenities.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 95,
//     "location": "Hoi An",
//     "country": "Vietnam"
//   },
//   {
//     "title": "Modern Retreat in the Black Forest",
//     "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 600,
//     "location": "Black Forest",
//     "country": "Germany"
//   },
//   {
//     "title": "Spacious Oceanfront Villa in Phuket",
//     "description": "Settle into a comfortable and private paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1800,
//     "location": "Phuket",
//     "country": "Thailand"
//   },
//   {
//     "title": "Chic City Studio in Stockholm",
//     "description": "Experience this stunning city pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 280,
//     "location": "Stockholm",
//     "country": "Sweden"
//   },
//   {
//     "title": "Idyllic Oasis in the Sahara",
//     "description": "Enjoy the ultimate escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 450,
//     "location": "Erg Chebbi",
//     "country": "Morocco"
//   },
//   {
//     "title": "Vibrant Beachfront House in Gold Coast",
//     "description": "Find your perfect place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 950,
//     "location": "Gold Coast",
//     "country": "Australia"
//   },
//   {
//     "title": "Tranquil Riverside Retreat in Lisbon",
//     "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 700,
//     "location": "Lisbon",
//     "country": "Portugal"
//   },
//   {
//     "title": "Panoramic Mountain Hideaway in Iceland",
//     "description": "Witness the beauty of a breathtaking landscape with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 500,
//     "location": "Golden Circle",
//     "country": "Iceland"
//   },
//   {
//     "title": "Exquisite Penthouse in Dubai",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 4000,
//     "location": "Dubai",
//     "country": "UAE"
//   },
//   {
//     "title": "Luxury Castle in Scotland",
//     "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3800,
//     "location": "Scottish Highlands",
//     "country": "UK"
//   },
//   {
//     "title": "Serene Guest House in Hvar",
//     "description": "Discover a comfortable and private place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 300,
//     "location": "Hvar",
//     "country": "Croatia"
//   },
//   {
//     "title": "Family-friendly Townhouse in Mexico City",
//     "description": "Settle into your dream home away from home, packed with amenities.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "Mexico City",
//     "country": "Mexico"
//   },
//   {
//     "title": "Bright Urban Apartment in San Francisco",
//     "description": "Experience this stunning city pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 550,
//     "location": "San Francisco",
//     "country": "USA"
//   },
//   {
//     "title": "Rustic Cabin in Blue Ridge Mountains",
//     "description": "Find your perfect retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 300,
//     "location": "Asheville outskirts",
//     "country": "USA"
//   },
//   {
//     "title": "Cozy Safari Tent in Masai Mara",
//     "description": "Unwind in your dream adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 600,
//     "location": "Masai Mara",
//     "country": "Kenya"
//   },
//   {
//     "title": "Modern Seaside Bungalow in Positano",
//     "description": "Discover a breathtaking oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1000,
//     "location": "Amalfi Coast",
//     "country": "Italy"
//   },
//   {
//     "title": "Spacious Ski Chalet in Chamonix",
//     "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3000,
//     "location": "Chamonix",
//     "country": "France"
//   },
//   {
//     "title": "Chic Hotel in Tokyo",
//     "description": "Experience your dream urban place, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 480,
//     "location": "Tokyo",
//     "country": "Japan"
//   },
//   {
//     "title": "Idyllic Cottage in the Dolomites",
//     "description": "Enjoy the ultimate mountain retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 750,
//     "location": "Dolomites",
//     "country": "Italy"
//   },
//   {
//     "title": "Vibrant Market Apartment in Marrakech",
//     "description": "Find your perfect place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 250,
//     "location": "Marrakech",
//     "country": "Morocco"
//   },
//   {
//     "title": "Tranquil Rainforest Treehouse in Bali",
//     "description": "Bask in the serene ambiance of this unique place amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 380,
//     "location": "Ubud",
//     "country": "Indonesia"
//   },
//   {
//     "title": "Panoramic Fjord View Cabin in Norway",
//     "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 620,
//     "location": "Fjords region",
//     "country": "Norway"
//   },
//   {
//     "title": "Exquisite Vineyard Villa in Mendoza",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1600,
//     "location": "Mendoza",
//     "country": "Argentina"
//   },
//   {
//     "title": "Luxury Beachfront Estate in Phuket",
//     "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 4000,
//     "location": "Phuket",
//     "country": "Thailand"
//   },
//   {
//     "title": "Serene Guest House in Vík",
//     "description": "Discover a comfortable and private place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 150,
//     "location": "Vík",
//     "country": "Iceland"
//   },
//   {
//     "title": "Family-friendly Townhouse in Sydney",
//     "description": "Settle into your dream home away from home, packed with amenities.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 420,
//     "location": "Sydney",
//     "country": "Australia"
//   },
//   {
//     "title": "Bright City Apartment in Munich",
//     "description": "Experience this stunning city pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 230,
//     "location": "Munich",
//     "country": "Germany"
//   },
//   {
//     "title": "Rustic Seaside Cottage in Santorini",
//     "description": "Find your perfect escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 800,
//     "location": "Santorini",
//     "country": "Greece"
//   },
//   {
//     "title": "Cozy Island Retreat in Lombok",
//     "description": "Unwind in your dream oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 280,
//     "location": "Lombok",
//     "country": "Indonesia"
//   },
//   {
//     "title": "Modern Safari Lodge in Queenstown",
//     "description": "Discover a breathtaking adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 980,
//     "location": "Queenstown",
//     "country": "New Zealand"
//   },
//   {
//     "title": "Spacious Country Estate in Portugal",
//     "description": "Settle into a comfortable and private retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 850,
//     "location": "Algarve",
//     "country": "Portugal"
//   },
//   {
//     "title": "Chic Studio Apartment in Amsterdam",
//     "description": "Experience your dream urban place, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 170,
//     "location": "Amsterdam",
//     "country": "Netherlands"
//   },
//   {
//     "title": "Idyllic Mountain Cabin in the Pyrenees",
//     "description": "Enjoy the ultimate mountain retreat, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "Pyrenees",
//     "country": "France"
//   },
//   {
//     "title": "Vibrant Artsy Loft in Montreal",
//     "description": "Find your perfect unique retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 250,
//     "location": "Montreal",
//     "country": "Canada"
//   },
//   {
//     "title": "Tranquil Farmhouse in Dublin Countryside",
//     "description": "Bask in the serene ambiance of this stylish place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 280,
//     "location": "Dublin",
//     "country": "Ireland"
//   },
//   {
//     "title": "Panoramic City Apartment in Zurich",
//     "description": "Witness the beauty of a breathtaking cityscape with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 650,
//     "location": "Zurich",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Exquisite Lodge in Serengeti National Park",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2700,
//     "location": "Serengeti National Park",
//     "country": "Tanzania"
//   },
//   {
//     "title": "Luxury Penthouse in Canary Wharf",
//     "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 4000,
//     "location": "London",
//     "country": "UK"
//   },
//   {
//     "title": "Serene Guest House in Krakow",
//     "description": "Discover a comfortable and private place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 100,
//     "location": "Krakow",
//     "country": "Poland"
//   },
//   {
//     "title": "Family-friendly Villa in Dubrovnik",
//     "description": "Settle into your dream paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1000,
//     "location": "Dubrovnik",
//     "country": "Croatia"
//   },
//   {
//     "title": "Bright Beachfront Bungalow in Boracay",
//     "description": "Experience your dream oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 500,
//     "location": "Boracay Island",
//     "country": "Philippines"
//   },
//   {
//     "title": "Rustic Treehouse in Vermont",
//     "description": "Find your perfect secluded adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 320,
//     "location": "Vermont",
//     "country": "USA"
//   },
//   {
//     "title": "Cozy Studio in San Francisco",
//     "description": "Unwind in your dream city pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "San Francisco",
//     "country": "USA"
//   },
//   {
//     "title": "Modern Ski Chalet in Les Gets",
//     "description": "Discover a breathtaking mountain retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2800,
//     "location": "French Alps",
//     "country": "France"
//   },
//   {
//     "title": "Spacious Safari Camp in the Okavango Delta",
//     "description": "Settle into a cozy yet spacious adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2200,
//     "location": "Okavango Delta",
//     "country": "Botswana"
//   },
//   {
//     "title": "Chic Hotel in Shibuya",
//     "description": "Experience this stunning urban sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 520,
//     "location": "Tokyo",
//     "country": "Japan"
//   },
//   {
//     "title": "Idyllic Waterfront Cottage in Nova Scotia",
//     "description": "Enjoy the ultimate escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 380,
//     "location": "Nova Scotia",
//     "country": "Canada"
//   },
//   {
//     "title": "Vibrant Penthouse in Berlin",
//     "description": "Find your perfect urban pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2800,
//     "location": "Berlin",
//     "country": "Germany"
//   },
//   {
//     "title": "Tranquil Bamboo House in Ubud",
//     "description": "Bask in the serene ambiance of this unique place amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 450,
//     "location": "Ubud",
//     "country": "Indonesia"
//   },
//   {
//     "title": "Panoramic Mountain Home in Switzerland",
//     "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1800,
//     "location": "Interlaken",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Exquisite Riverside Villa in Tuscany",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2200,
//     "location": "Tuscany",
//     "country": "Italy"
//   },
//   {
//     "title": "Luxury Yacht in Mykonos",
//     "description": "Unwind in the ultimate paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 4200,
//     "location": "Mykonos",
//     "country": "Greece"
//   },
//   {
//     "title": "Serene Vineyard Retreat in Porto",
//     "description": "Discover a comfortable and private place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 350,
//     "location": "Porto",
//     "country": "Portugal"
//   },
//   {
//     "title": "Family-friendly Townhouse in Barcelona",
//     "description": "Settle into your dream urban escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 300,
//     "location": "Barcelona",
//     "country": "Spain"
//   },
//   {
//     "title": "Bright Modern Apartment in Vienna",
//     "description": "Experience this stunning city pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 220,
//     "location": "Vienna",
//     "country": "Austria"
//   },
//   {
//     "title": "Rustic Lakeside Lodge in New Zealand",
//     "description": "Find your perfect adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 780,
//     "location": "Queenstown",
//     "country": "New Zealand"
//   },
//   {
//     "title": "Cozy Island Retreat in Croatia",
//     "description": "Unwind in your dream oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 280,
//     "location": "Hvar",
//     "country": "Croatia"
//   },
//   {
//     "title": "Modern Coastal Villa in Cascais",
//     "description": "Discover a breathtaking beachfront retreat, perfect for relaxation or exploration.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1000,
//     "location": "Cascais",
//     "country": "Portugal"
//   },
//   {
//     "title": "Spacious Beachfront Bungalow in Vietnam",
//     "description": "Settle into a comfortable and private paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 480,
//     "location": "Da Nang",
//     "country": "Vietnam"
//   },
//   {
//     "title": "Chic City Studio in Copenhagen",
//     "description": "Experience this stunning urban pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 190,
//     "location": "Copenhagen",
//     "country": "Denmark"
//   },
//   {
//     "title": "Idyllic Oasis in the Dubai Desert",
//     "description": "Enjoy the ultimate desert escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 700,
//     "location": "Dubai",
//     "country": "UAE"
//   },
//   {
//     "title": "Vibrant Nightlife Loft in Mexico City",
//     "description": "Find your perfect place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "Mexico City",
//     "country": "Mexico"
//   },
//   {
//     "title": "Tranquil Desert Safari Camp in Rajasthan",
//     "description": "Bask in the serene ambiance of this unique place amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 500,
//     "location": "Jaipur",
//     "country": "India"
//   },
//   {
//     "title": "Panoramic City View Home in Buenos Aires",
//     "description": "Witness the beauty of a breathtaking cityscape with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 850,
//     "location": "Buenos Aires",
//     "country": "Argentina"
//   },
//   {
//     "title": "Exquisite Hotel in Rome",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 600,
//     "location": "Rome",
//     "country": "Italy"
//   },
//   {
//     "title": "Luxury Ski Chalet in Colorado",
//     "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3800,
//     "location": "Aspen",
//     "country": "USA"
//   },
//   {
//     "title": "Serene Guest House in Kerala Backwaters",
//     "description": "Discover a comfortable and private place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 250,
//     "location": "Kerala",
//     "country": "India"
//   },
//   {
//     "title": "Family-friendly Townhouse in Manchester",
//     "description": "Settle into your dream home away from home, packed with amenities.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 320,
//     "location": "Manchester",
//     "country": "UK"
//   },
//   {
//     "title": "Bright Urban Apartment in Barcelona",
//     "description": "Experience this stunning city pad, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 200,
//     "location": "Barcelona",
//     "country": "Spain"
//   },
//   {
//     "title": "Rustic Riverside Retreat in Scotland",
//     "description": "Find your perfect escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "Scottish Highlands",
//     "country": "UK"
//   },
//   {
//     "title": "Cozy Island Bungalow in Gili Islands",
//     "description": "Unwind in your dream oasis amidst stunning natural beauty.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 280,
//     "location": "Gili Islands",
//     "country": "Indonesia"
//   },
//   {
//     "title": "Modern Safari Lodge in Garden Route",
//     "description": "Discover a breathtaking adventure hub, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1000,
//     "location": "Garden Route",
//     "country": "South Africa"
//   },
//   {
//     "title": "Spacious Beachfront Resort in Krabi",
//     "description": "Settle into a comfortable and private paradise for families and friends.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1500,
//     "location": "Krabi",
//     "country": "Thailand"
//   },
//   {
//     "title": "Chic City Penthouse in Toronto",
//     "description": "Experience your dream urban place, close to all the action.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 3800,
//     "location": "Toronto",
//     "country": "Canada"
//   },
//   {
//     "title": "Idyllic A-Frame Home in Canadian Wilderness",
//     "description": "Enjoy the ultimate escape, offering peace and tranquility.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 400,
//     "location": "Whistler",
//     "country": "Canada"
//   },
//   {
//     "title": "Vibrant Apartment in Amsterdam",
//     "description": "Find your perfect place where comfort meets convenience.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 200,
//     "location": "Amsterdam",
//     "country": "Netherlands"
//   },
//   {
//     "title": "Tranquil Island Resort in Fiji",
//     "description": "Bask in the serene ambiance of this exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2500,
//     "location": "Nadi",
//     "country": "Fiji"
//   },
//   {
//     "title": "Panoramic Mountain View Home in Swiss Alps",
//     "description": "Witness the beauty of a breathtaking gateway with unparalleled views.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 2800,
//     "location": "Zermatt",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Exquisite Lakeside Villa in Como",
//     "description": "Immerse yourself in this unique exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 1800,
//     "location": "Lake Como",
//     "country": "Italy"
//   },
//   {
//     "title": "Luxury City Loft in Madrid",
//     "description": "Unwind in the ultimate exclusive sanctuary designed for luxury.",
//     "image": "https://placekitten.com/g/100/75",
//     "price": 900,
//     "location": "Madrid",
//     "country": "Spain"
//   }
// ];

// module.exports = { data: sampleListings }; 