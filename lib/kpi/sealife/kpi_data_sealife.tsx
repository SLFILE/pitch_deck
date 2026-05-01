import {
  FaWater,
  FaFish,
  FaLayerGroup,
  FaBinoculars,
  FaUsers,
  FaLink,
  FaThermometerHalf,
} from "react-icons/fa";

export interface FeatureBlock {
  id: number;
  tagbar?: string | null;
  glyph?: React.ComponentType | null;
  headingLarge?: string | null;
  headingMedium?: string | null;
  mainContent?: string | null;
  tileColor?: string | null;
  branch?: string | null;
}

export const SeaLifeKPI: FeatureBlock[] = [
  { id: 0, branch: "Sea Life" },
  {
    id: 1,
    tagbar: "Water Capacity",
    glyph: FaWater,
    headingLarge: "250,000 Gallons",
    headingMedium: null,
    mainContent:
      "Massive-scale aquatic life support systems designed to sustain diverse marine habitats.",
    tileColor: "#3B82F6",
  },
  {
    id: 2,
    tagbar: null,
    glyph: FaFish,
    headingLarge: null,
    headingMedium: "3,000+ Creatures",
    mainContent:
      "High-density biodiversity including sharks, rays, jellyfish, and other marine species.",
    tileColor: "#10B981",
  },
  {
    id: 3,
    tagbar: null,
    glyph: FaLayerGroup,
    headingLarge: null,
    headingMedium: "10+ Interactive Zones",
    mainContent:
      "NYC-themed habitats for localized brand resonance and immersive visitor experiences.",
    tileColor: "#FB923C",
  },
  {
    id: 4,
    tagbar: null,
    glyph: FaBinoculars,
    headingLarge: null,
    headingMedium: "Ocean Tunnel",
    mainContent:
      "180-degree underwater walkthrough experience, the aquarium’s most iconic feature.",
    tileColor: "#3B82F6",
  },
  {
    id: 5,
    tagbar: null,
    glyph: FaUsers,
    headingLarge: null,
    headingMedium: "High School/Family Volume",
    mainContent:
      "Primary destination for K-12 educational field trips and family-centric eco-tourism.",
    tileColor: "#10B981",
  },
  {
    id: 6,
    tagbar: null,
    glyph: FaLink,
    headingLarge: null,
    headingMedium: "Dual-Attraction Logic",
    mainContent:
      "Directly paired with LEGOLAND® Discovery Center for ‘stay-all-day’ bundled revenue.",
    tileColor: "#FB923C",
  },
  {
    id: 7,
    tagbar: null,
    glyph: FaThermometerHalf,
    headingMedium: "Indoors/Climate-Fixed",
    headingLarge: null,
    mainContent:
      "Consistent visitor flow regardless of seasonal ocean conditions, ensuring stable year-round operations.",
    tileColor: "#3B82F6",
  },
];
