import {
  FaCalendarDay,
  FaClock,
  FaRulerCombined,
  FaThLarge,
} from "react-icons/fa";
import { SiLucid } from "react-icons/si";
import { TbAtom2Filled } from "react-icons/tb";

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

export const LegoKPI: FeatureBlock[] = [
  { id: 0, branch: "Lego Land" },
  {
    id: 1,
    tagbar: "Premium",
    glyph: null,
    headingLarge: "1.5M+ Bricks",
    headingMedium: null,
    mainContent:
      'High engagement "MINILAND" Asset Precision engineered miniature landscapes driving world class visitor interaction and education',
    tileColor: "#3B82F6",
  },
  {
    id: 2,
    tagbar: null,
    glyph: SiLucid,
    headingLarge: null,
    headingMedium: "35,000 SQ.FT.",
    mainContent: "Total Optimized Indoor Footprint",
    tileColor: "#10B981",
  },
  {
    id: 3,
    tagbar: null,
    glyph: FaThLarge,
    headingLarge: null,
    headingMedium: "30% Expansion",
    mainContent: "Recent Growth In Visitor Capacity",
    tileColor: "#FB923C",
  },
  {
    id: 4,
    tagbar: null,
    glyph: FaRulerCombined,
    headingLarge: null,
    headingMedium: "30% Cross Conversion",
    mainContent: "Synergy With Sea Life Aquarium",
    tileColor: "#3B82F6",
  },
  {
    id: 5,
    tagbar: null,
    glyph: TbAtom2Filled,
    headingLarge: null,
    headingMedium: "365 Days/Year",
    mainContent: "Seasonality Proof Operational Yield",
    tileColor: "#10B981",
  },
  {
    id: 6,
    tagbar: null,
    glyph: FaCalendarDay,
    headingLarge: null,
    headingMedium: "365 Days/Year",
    mainContent: "Seasonality Proof Operational Yield",
    tileColor: "#FB923C",
  },
  {
    id: 7,
    tagbar: null,
    glyph: FaClock,
    headingLarge: null,
    headingMedium: "180 Mins",
    mainContent: "Average Brand Dwell Time Per Visitor",
    tileColor: "#3B82F6",
  },
];
