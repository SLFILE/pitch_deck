import {
  FaBuilding,
  FaStore,
  FaBalanceScale,
  FaUsers,
  FaPalette,
  FaConciergeBell,
  FaHandshake,
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

export const AvenueKPI: FeatureBlock[] = [
  { id: 0, branch: "Avenue" },
  {
    id: 1,
    tagbar: "Luxury Footprint",
    glyph: FaBuilding,
    headingLarge: "300,000+ sq. ft.",
    headingMedium: null,
    mainContent:
      "Dedicated ultra-high-end retail and dining corridor designed as a cultural and commercial showcase.",
    tileColor: "#3B82F6",
  },
  {
    id: 2,
    tagbar: null,
    glyph: FaStore,
    headingLarge: null,
    headingMedium: "Saks Fifth Avenue",
    mainContent:
      "Two-story, 110,000 sq. ft. powerhouse flagship anchor driving prestige and brand gravity.",
    tileColor: "#10B981",
  },
  {
    id: 3,
    tagbar: null,
    glyph: FaBalanceScale,
    headingLarge: null,
    headingMedium: "0% Sales Tax",
    mainContent:
      "Unique incentive for luxury clothing and footwear purchases, creating unmatched competitive advantage.",
    tileColor: "#FB923C",
  },
  {
    id: 4,
    tagbar: null,
    glyph: FaUsers,
    headingLarge: null,
    headingMedium: "20M+ Residents",
    mainContent:
      "Direct proximity to the NYC high-net-worth demographic within a 5-mile radius.",
    tileColor: "#3B82F6",
  },
  {
    id: 5,
    tagbar: null,
    glyph: FaPalette,
    headingLarge: null,
    headingMedium: "$10M+ Art Investment",
    mainContent:
      "Museum-quality sculptures and curated installations, including Jonathan Adler’s iconic ‘Face’ planters.",
    tileColor: "#10B981",
  },
  {
    id: 6,
    tagbar: null,
    glyph: FaConciergeBell,
    headingLarge: null,
    headingMedium: "5-Star Concierge",
    mainContent:
      "VIP valet, personal shopping, and white-glove delivery elevate the luxury experience.",
    tileColor: "#FB923C",
  },
  {
    id: 7,
    tagbar: null,
    glyph: FaHandshake,
    headingLarge: "High-Spend Cross-over",
    headingMedium: null,
    mainContent:
      "Proximity to DreamWorks Water Park Skybox suites ensures affluent visitor overlap.",
    tileColor: "#3B82F6",
  },
];
