import { Plane, Users, Rocket, Star } from "lucide-react";

export const stats = [
  { icon: Plane, number: "150+", label: "Destinations" },
  { icon: Users, number: "50K+", label: "Happy Travelers" },
  { icon: Rocket, number: "1M+", label: "Trips Organized" },
  { icon: Star, number: "4.9", label: "Average Rating" },
];

export const teamMembers = [
  {
    name: "Anthony Muhoro",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    name: "Frank Kober",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    description:
      "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    name: "Lucy Alexis",
    role: "Travel Curator",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    description:
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
];

export const destinations = [
  {
    id: 1,
    name: "Mt. Kenya, Kenya",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/img-636x426.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/the-cliff-lake-nakuru-636x426.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/life-with-the-elephants-636x426.jpg",
    ],
    description:
      "Kenya’s highest peak and second tallest in Africa, Mt. Kenya offers scenic hikes, alpine landscapes, and glacier views for adventurers.",
    groupPrices: {
      3: 1050,
      5: 1650,
      10: 2600,
      15: 3300,
    },
    individualCost: 300,
    featured: true,
  },
  {
    id: 2,
    name: "Mt. Ruwenzori, Uganda",
    images: [
      "https://images.unsplash.com/photo-1544986581-efac024faf62?w=800",
      "https://images.unsplash.com/photo-1746704948438-f3e307e1833c?w=800",
    ],
    description:
      'Known as the "Mountains of the Moon", this UNESCO World Heritage site is perfect for trekkers and nature lovers looking for a unique alpine experience.',
    groupPrices: {
      3: 180,
      5: 290,
      10: 470,
      15: 630,
    },
    individualCost: 80,
    featured: true,
  },
  {
    id: 3,
    name: "Lake Nakuru, Kenya",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/the-cliff-lake-nakuru-636x426.jpg",
    ],
    description:
      "Famous for its flamingos and rhinos, Lake Nakuru is a serene national park ideal for wildlife photography and birdwatching.",
    groupPrices: {
      3: 90,
      5: 140,
      10: 220,
      15: 270,
    },
    individualCost: 40,
    featured: true,
  },
  {
    id: 4,
    name: "Tsavo National Park",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/life-with-the-elephants-636x426.jpg",
    ],
    description:
      "One of Kenya’s largest parks, Tsavo is known for red elephants, volcanic hills, and vast savannahs teeming with wildlife.",
    groupPrices: {
      3: 180,
      5: 250,
      10: 400,
      15: 500,
    },
    individualCost: 75,
    featured: true,
  },
  {
    id: 5,
    name: "Nairobi National Park",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/ololo-safari-lodge-636x426.jpg",
    ],
    description:
      "A unique wildlife experience right next to the city—spot lions, giraffes, and rhinos with Nairobi’s skyline as a backdrop.",
    groupPrices: {
      3: 70,
      5: 110,
      10: 170,
      15: 210,
    },
    individualCost: 35,
    featured: true,
  },
  {
    id: 6,
    name: "Coastal Kenya, Diani",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/sarova-whitesands-beach-636x426.jpg",
      "https://images.unsplash.com/photo-1748182575169-e1e8e3901ec3?w=500",
    ],
    description:
      "Explore palm-fringed beaches, coral reefs, and Swahili culture along Kenya’s stunning coastlines in Diani, Watamu, and Mombasa.",
    groupPrices: {
      3: 240,
      5: 360,
      10: 580,
      15: 750,
    },
    individualCost: 90,
    featured: true,
  },
  {
    id: 7,
    name: "Bwindi Impenetrable Forest, Uganda",
    images: [
      "https://images.unsplash.com/photo-1748182575169-e1e8e3901ec3?w=500",
    ],
    description:
      "Home to endangered mountain gorillas, this lush forest offers unforgettable trekking experiences deep in nature.",
    groupPrices: {
      3: 420,
      5: 600,
      10: 1050,
      15: 1400,
    },
    individualCost: 200,
    featured: false,
  },
  {
    id: 8,
    name: "Maasai Mara, Kenya",
    images: [
      "https://plus.unsplash.com/premium_photo-1661963218093-61a68278d7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHphbnppYmFyfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1746704948438-f3e307e1833c?w=800",
    ],
    description:
      "World-famous for the Great Migration, the Maasai Mara provides breathtaking safari encounters and rich Maasai culture.",
    groupPrices: {
      3: 300,
      5: 450,
      10: 800,
      15: 950,
    },
    individualCost: 120,
    featured: false,
  },
  {
    id: 9,
    name: "Zanzibar, Tanzania",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/manda-bay-hotel-13-636x426.jpg",
    ],
    description:
      "An exotic island offering white-sand beaches, spice tours, and the ancient town of Stone Town full of culture and history.",
    groupPrices: {
      3: 360,
      5: 520,
      10: 890,
      15: 1050,
    },
    individualCost: 150,
    featured: false,
  },
  {
    id: 10,
    name: "Hell's Gate National Park",
    images: ["https://images.unsplash.com/photo-1586627161720-ee2849303aee"],
    description:
      "Ideal for hiking, cycling, and rock climbing, Hell’s Gate features towering cliffs and gorges that inspired ‘The Lion King’.",
    groupPrices: {
      3: 90,
      5: 130,
      10: 200,
      15: 250,
    },
    individualCost: 50,
    featured: false,
  },
  {
    id: 11,
    name: "Amboseli National Park",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/samburu-intrepids-luxury-2-636x426.jpg",
    ],
    description:
      "Famous for elephant herds and Mount Kilimanjaro views, Amboseli is a must-see park for nature lovers and photographers.",
    groupPrices: {
      3: 240,
      5: 360,
      10: 650,
      15: 780,
    },
    individualCost: 100,
    featured: false,
  },
  {
    id: 12,
    name: "Rwenzori Mountains National Park",
    images: [
      "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/kilifi-bay-beach-resort-4-636x426.jpg",
    ],
    description:
      "A stunning mix of glaciers, waterfalls, and alpine meadows, this park offers some of the best high-altitude hikes in Africa.",
    groupPrices: {
      3: 210,
      5: 320,
      10: 580,
      15: 750,
    },
    individualCost: 90,
    featured: false,
  },
  {
    id: 13,
    name: "Serengeti National Park, Tanzania",
    images: [
      "https://plus.unsplash.com/premium_photo-1661836503554-936aab49a7d4?w=500&auto=format",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/kilifi-bay-beach-resort-4-636x426.jpg",
    ],
    description:
      "A vast savannah full of lions, wildebeest, and more—this is the ultimate African safari experience, especially during migration season.",
    groupPrices: {
      3: 390,
      5: 550,
      10: 920,
      15: 1150,
    },
    individualCost: 180,
    featured: false,
  },
  {
    id: 14,
    name: "Ol Pejeta Conservancy, Kenya",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/kilifi-bay-beach-resort-4-636x426.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/pool-5-636x426.jpg",
    ],
    description:
      "A conservation success story with the last two northern white rhinos, Ol Pejeta combines wildlife protection with luxury safari.",
    groupPrices: {
      3: 150,
      5: 220,
      10: 400,
      15: 500,
    },
    individualCost: 75,
    featured: false,
  },
  {
    id: 15,
    name: "Gorongosa National Park, Mozambique",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/pool-5-636x426.jpg",
    ],
    description:
      "A gem in central Mozambique, Gorongosa is being restored to its former glory with rich biodiversity and eco-tourism.",
    groupPrices: {
      3: 270,
      5: 390,
      10: 650,
      15: 800,
    },
    individualCost: 110,
    featured: false,
  },
  {
    id: 16,
    name: "Simien Mountains National Park, Ethiopia",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/tortilis-camp-19-636x408.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/lake-naivasha-country-636x426.jpg",
    ],
    description:
      "Dramatic peaks and deep valleys, home to the Gelada monkey and Walia ibex—great for hiking, camping, and rare wildlife.",
    groupPrices: {
      3: 180,
      5: 270,
      10: 450,
      15: 600,
    },
    individualCost: 95,
    featured: false,
  },
];

export const Trips = [
  {
    id: 1,
    category: "honeymoon",
    images: [
      "https://cdn.pixabay.com/photo/2013/04/07/20/11/bride-101586_640.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/tortilis-camp-19-636x408.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/lake-naivasha-country-636x426.jpg",
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2500,
    detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, risus nec porttitor pretium, augue justo accumsan velit, sed cursus mi dolor non quam.",
  },
  {
    id: 2,
    category: "family",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/img-636x426.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/the-cliff-lake-nakuru-636x426.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/life-with-the-elephants-636x426.jpg",
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1800,
    detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis, ex in viverra aliquet, tellus nulla vestibulum justo, sed tincidunt turpis arcu ut mauris.",
  },
  {
    id: 3,
    category: "adventure",
    images: [
      "https://ruachsafaris.com/wp-content/uploads/2024/07/kilifi-bay-beach-resort-4-636x426.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/pool-5-636x426.jpg",
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2700,
    detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna nec augue pulvinar blandit. Integer tincidunt ligula at velit luctus, nec tincidunt enim efficitur.",
  },
  {
    id: 4,
    category: "cultural tours",
    images: [
      "https://cdn.pixabay.com/photo/2021/10/31/19/35/tribe-6758620_640.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/the-cliff-lake-nakuru-636x426.jpg",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/life-with-the-elephants-636x426.jpg",
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2200,
    detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 5,
    category: "wildlife safaris",
    images: [
      "https://images.unsplash.com/photo-1544986581-efac024faf62?w=800",
      "https://images.unsplash.com/photo-1746704948438-f3e307e1833c?w=800",
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 3000,
    detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis ac sapien vehicula cursus. Aliquam erat volutpat. Etiam porta sapien ac augue hendrerit iaculis.",
  },
  {
    id: 6,
    category: "eco-tours",
    images: [
      "https://cdn.pixabay.com/photo/2014/10/10/10/49/forest-483207_640.jpg",
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2000,
    detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, erat nec dapibus cursus, augue risus consectetur ex, a pretium turpis erat non magna.",
  },
  {
    id: 7,
    category: "luxury vacations",
    images: [
      "https://cdn.pixabay.com/photo/2022/09/06/15/28/thai-7436935_640.jpg",
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 5000,
    detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at diam eu magna fermentum bibendum. Nunc eleifend efficitur nulla, sed dictum sem feugiat nec.",
  },
  {
    id: 8,
    category: "beach holidays",
    images: [
      "https://cdn.pixabay.com/photo/2019/05/09/20/56/vacation-4192123_640.jpg",
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2100,
    detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et tellus nec justo interdum hendrerit. Curabitur condimentum magna nec ligula bibendum, ac suscipit nunc efficitur.",
  },
  {
    id: 9,
    category: "wellness retreats",
    images: [
      "https://cdn.pixabay.com/photo/2020/08/06/07/49/woman-5467227_640.jpg",
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2300,
    detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt sapien sed nisl viverra, in vehicula felis ultrices. Donec gravida dignissim ante nec cursus.",
  },
  {
    id: 10,
    category: "culinary tours",
    images: [
      "https://plus.unsplash.com/premium_photo-1661836503554-936aab49a7d4?w=500&auto=format",
      "https://ruachsafaris.com/wp-content/uploads/2024/07/kilifi-bay-beach-resort-4-636x426.jpg",
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2600,
    detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut elit nec nulla volutpat tristique. Cras in felis non risus dapibus hendrerit vitae sed justo.",
  },
];
