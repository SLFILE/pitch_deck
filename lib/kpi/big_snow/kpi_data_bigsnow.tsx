import {
  FaMountain,
  FaRulerVertical,
  FaTemperatureLow,
  FaUsers,
  FaSnowflake,
  FaSkiing,
  FaChartLine,
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

export const BigSnowKPI: FeatureBlock[] = [
  { id: 0, branch: "Big Snow" },
  {
    id: 1,
    tagbar: "Vertical Footprint",
    glyph: FaMountain,
    headingLarge: "180,000 sq. ft.",
    headingMedium: null,
    mainContent:
      "Massive 16-story climate-controlled structure, North America’s first and only indoor real-snow resort.",
    tileColor: "#3B82F6",
  },
  {
    id: 2,
    tagbar: null,
    glyph: FaRulerVertical,
    headingLarge: null,
    headingMedium: "1,000 ft. Slope",
    mainContent:
      "Professional-grade run with a 160-foot vertical drop, engineered for year-round performance.",
    tileColor: "#10B981",
  },
  {
    id: 3,
    tagbar: null,
    glyph: FaTemperatureLow,
    headingLarge: null,
    headingMedium: "28°F (-2°C) Fixed",
    mainContent:
      "Year-round ‘Perfect Snow’ conditions regardless of outside temperature, decoupled from climate volatility.",
    tileColor: "#FB923C",
  },
  {
    id: 4,
    tagbar: null,
    glyph: FaUsers,
    headingLarge: null,
    headingMedium: "500 Guests Daily",
    mainContent:
      "Precision-managed per-slot flow ensures premium experience and maximized throughput.",
    tileColor: "#3B82F6",
  },
  {
    id: 5,
    tagbar: null,
    glyph: FaSnowflake,
    headingLarge: null,
    headingMedium: "5,500 Tons of Snow",
    mainContent:
      "Constant base depth of 2 feet of high-density real snow maintained by cryogenic cooling systems.",
    tileColor: "#10B981",
  },
  {
    id: 6,
    tagbar: null,
    glyph: FaSkiing,
    headingLarge: null,
    headingMedium: "1,000+ Gear Sets",
    mainContent:
      "High-margin rental model offering full-service ‘Arrival-to-Slope’ equipment efficiency.",
    tileColor: "#FB923C",
  },
  {
    id: 7,
    tagbar: null,
    glyph: FaChartLine,
    headingLarge: "First-Timers (80%)",
    headingMedium: null,
    mainContent:
      "Captures the massive introductory market for winter sports, driving long-term growth and brand loyalty.",
    tileColor: "#3B82F6",
  },
];
