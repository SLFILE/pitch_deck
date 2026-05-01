import {
  FaWater,
  FaSun,
  FaSwimmer,
  FaUmbrellaBeach,
  FaCouch,
  FaWaveSquare,
  FaUsers,
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

export const DreamworksKPI: FeatureBlock[] = [
  { id: 0, branch: "Dream Works" },
  {
    id: 1,
    tagbar: "Total Area",
    glyph: FaWater,
    headingLarge: "8.5 Acres",
    headingMedium: null,
    mainContent:
      "North America's largest indoor water park, serving as the mall’s highest-impact anchor attraction.",
    tileColor: "#3B82F6",
  },
  {
    id: 2,
    tagbar: null,
    glyph: FaSun,
    headingLarge: null,
    headingMedium: "81°F (27°C) Year-Round",
    mainContent:
      "Permanent tropical climate creates a ‘Summer’ environment in a four-season market.",
    tileColor: "#10B981",
  },
  {
    id: 3,
    tagbar: null,
    glyph: FaSwimmer,
    headingLarge: null,
    headingMedium: "1.6 Million Gallons",
    mainContent:
      "Massive-scale aquatic infrastructure engineered for durability and guest safety.",
    tileColor: "#FB923C",
  },
  {
    id: 4,
    tagbar: null,
    glyph: FaUmbrellaBeach,
    headingLarge: null,
    headingMedium: "40+ Slides & Rides",
    mainContent:
      "Includes the world’s tallest indoor body slide and multiple record-breaking attractions.",
    tileColor: "#3B82F6",
  },
  {
    id: 5,
    tagbar: null,
    glyph: FaCouch,
    headingLarge: null,
    headingMedium: "31 VIP Cabanas",
    mainContent:
      "High-margin luxury inventory designed by Jonathan Adler, offering premium guest experiences.",
    tileColor: "#10B981",
  },
  {
    id: 6,
    tagbar: null,
    glyph: FaWaveSquare,
    headingLarge: null,
    headingMedium: "1.5 Acre Wave Pool",
    mainContent:
      "The world’s largest indoor wave pool, serving as the central gathering point.",
    tileColor: "#FB923C",
  },
  {
    id: 7,
    tagbar: null,
    glyph: FaUsers,
    headingLarge: "5,000+ Daily Guests",
    headingMedium: null,
    mainContent:
      "High-density visitor throughput drives secondary spend potential and maximizes investor returns.",
    tileColor: "#3B82F6",
  },
];
