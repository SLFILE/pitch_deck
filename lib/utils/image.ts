export interface ImageConfig {
  id: string;
  title: string;
  description: string;
  uri: string;
  metadata: string;
  name?: string;
}

export type ImageObjectMap = Record<string, ImageConfig>;

export const Images: ImageObjectMap = {
  nickelodeon: {
    id: "nickelodeon",
    title: "Nickelodeon Universe",
    description:
      "Indoor amusement park with roller coasters, tropical landscaping, and Nickelodeon characters.",
    uri: "/images/nickelodeon_1.jpg",
    metadata:
      "Indoor amusement park with bright roller coaster tracks in orange, green, purple.",
  },
  nickelodeon1: {
    id: "nickelodeon-2",
    title: "Nickelodeon Universe",
    description:
      "Indoor amusement park with roller coasters, tropical landscaping, and Nickelodeon characters.",
    uri: "/images/nickelodeon_2.jpg",
    metadata:
      "Nickelodeon branding visible with signage, tropical plants, and cartoon murals.",
  },
  aq_3: {
    id: "sea-life-1",
    title: "SEA LIFE Aquarium",
    name: "Ocean Tunnel Experience",
    description:
      "Walk through an immersive underwater tunnel featuring sharks, rays, and vibrant coral reefs.",
    uri: "/images/aq_3.jpg",
    metadata: "An underwater tunnel view with a large shark swimming overhead.",
  },
  aq_1: {
    id: "sea-life-2",
    title: "SEA LIFE Aquarium",
    name: "City Under the Sea",
    description:
      "A unique miniature New York City skyline submerged in a massive tank.",
    uri: "/images/aq_1.webp",
    metadata:
      "Submerged miniature versions of the Empire State Building and Chrysler Building.",
  },
  aq_2: {
    id: "sea-life-3",
    title: "SEA LIFE Aquarium",
    name: "Underwater Metropolis",
    description:
      "Experience the magic of an aquatic city where marine life meets iconic architecture.",
    uri: "/images/aq_2.avif",
    metadata:
      "Artistic underwater scene showing a shark swimming past the Empire State Building.",
  },
  dream_2: {
    id: "dreamworks-waterpark-1",
    title: "DreamWorks Water Park",
    name: "Far Far Away Bay",
    description:
      "The world's largest indoor wave pool featuring characters from Shrek and Madagascar.",
    uri: "/images/dream_2.jpg",
    metadata: "Massive indoor wave pool with a large glass dome roof.",
  },
  dream_1: {
    id: "dreamworks-waterpark-2",
    title: "DreamWorks Water Park",
    name: "Banzai Blaster",
    description:
      "Multi-colored high-speed body slides and jungle-themed play structures.",
    uri: "/images/dream_1.avif",
    metadata:
      "Complex network of colorful water slides twisting around a giant artificial tree.",
  },
  dream_3: {
    id: "dreamworks-waterpark-3",
    title: "DreamWorks Water Park",
    name: "Pineapple Jam",
    description:
      "Fun for the whole family in a tropical indoor setting with year-round summer vibes.",
    uri: "/images/dream_3.jpg",
    metadata: "Indoor water park view featuring the Pineapple Jam structure.",
  },
  av_1: {
    id: "the-avenue-1",
    title: "The Avenue",
    name: "Luxury Retail District",
    description:
      "High-end shopping featuring world-class brands like Saks Fifth Avenue and Hermès.",
    uri: "/images/av_1.jpg",
    metadata: "Modern exterior architecture of the American Dream mall.",
  },
  av_2: {
    id: "the-avenue-2",
    title: "The Avenue Interior",
    name: "Sculptural Gardens",
    description:
      "Elegant corridors featuring champagne-leafed sculptures and topiary art.",
    uri: "/images/av_2.jpeg",
    metadata: "Interior mall walkway with white sculptural face vases.",
  },
  av_3: {
    id: "the-avenue-3",
    title: "The Avenue Promenade",
    name: "Artistic Hallways",
    description:
      "Stroll through beautifully designed spaces filled with unique art installations.",
    uri: "/images/av_3.jpeg",
    metadata: "A wide, bright mall hallway with vaulted ceilings.",
  },
  dream_wheel: {
    id: "dream-wheel",
    title: "The Dream Wheel",
    description:
      "A 300-foot tall observation wheel offering views of the Manhattan skyline.",
    uri: "/images/dream_wheel.webp",
    metadata:
      "Large illuminated Ferris wheel at night with blue and purple lighting.",
  },

  fifa_hub: {
    id: "fifa-hub-1",
    title: "American Dream Mall",
    name: "FIFA World Cup 2026 Hub",
    description:
      "Promotional hub for the FIFA World Cup 2026, adjacent to MetLife Stadium.",
    uri: "/images/fifa_cup.png",
    metadata:
      "Red poster featuring the golden FIFA World Cup trophy with text 'Where Vision Meets Value'.",
  },
  lego_ninjago: {
    id: "lego-discovery-1",
    title: "LEGOLAND Discovery Center",
    name: "Ninjago Buzz Mountain",
    description:
      "Interactive Ninjago training camp area featuring the Buzz Mountain Challenge.",
    uri: "/images/lego_1.webp",
    metadata:
      "Large red LEGO Ninjago character figure standing in front of an interactive digital play screen.",
  },
  lego_racers: {
    id: "lego-discovery-2",
    title: "LEGOLAND Discovery Center",
    name: "Build & Test Racing",
    description:
      "Families can build their own LEGO vehicles and race them down the test ramps.",
    uri: "/images/lego_2.jpg",
    metadata:
      "A family of five happily watching custom LEGO cars race down a black ramp.",
  },
  lego_workshop: {
    id: "lego-discovery-3",
    title: "LEGOLAND Discovery Center",
    name: "Creative Workshop",
    description:
      "Hands-on building sessions led by a Master Model Builder in a colorful classroom setting.",
    uri: "/images/lego_4.webp",
    metadata:
      "Brightly colored room with children and adults sitting at tables building with LEGO bricks while an instructor teaches.",
  },
  big_snow_village: {
    id: "big-snow-1",
    title: "Big SNOW",
    name: "Indoor Ski Village",
    description:
      "North America's first indoor, real-snow ski and snowboard park featuring a chalet-style retail village.",
    uri: "/images/snow_1.jpg",
    metadata:
      "Indoor ski slope with people snowboarding and skiing in front of rustic storefronts like Hard Rock Cafe and Yard House.",
  },
  big_snow_slope: {
    id: "big-snow-2",
    title: "Big SNOW",
    name: "Ski Slope & Lift",
    description:
      "Year-round winter wonderland equipped with ski lifts, terrain park features, and fresh snow.",
    uri: "/images/snow_2.jpg",
    metadata:
      "Wide view of an expansive indoor snow slope showing an overhead ski lift, a terrain park with rails, and several skiers.",
  },
};
