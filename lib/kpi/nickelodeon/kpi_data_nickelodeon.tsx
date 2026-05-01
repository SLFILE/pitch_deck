import {
  FaCalendarDay,
  FaChartArea,
  FaClock,
  FaRulerCombined,
  FaThLarge,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { PiMathOperationsFill } from "react-icons/pi";
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

export const NickelodeonKPI: FeatureBlock[] = [
  { id: 0, branch: "Nickelodeon" },
  {
    id: 1,
    tagbar: "Annual Inflow",
    glyph: null,
    headingLarge: "40 Million",
    headingMedium: "Projected Visitor Reach",
    mainContent:
      "Targeted annual inflow of the American Dream complex ensures consistent high-frequency footfall.",
    tileColor: "#3B82F6",
  },
  {
    id: 2,
    tagbar: null,
    glyph: FaChartArea,
    headingLarge: null,
    headingMedium: "8.5 Acres",
    mainContent:
      "Largest indoor theme park in the Western Hemisphere, maximizing commercial density per square foot.",
    tileColor: "#10B981",
  },
  {
    id: 3,
    tagbar: null,
    glyph: IoLocation,
    headingLarge: null,
    headingMedium: "5 Miles from NYC",
    mainContent:
      "Direct access to the wealthiest metropolitan market in North America with 20M+ residents nearby.",
    tileColor: "#FB923C",
  },
  {
    id: 4,
    tagbar: null,
    glyph: PiMathOperationsFill,
    headingLarge: null,
    headingMedium: "365 Days/Year",
    mainContent:
      "Climate-controlled environment eliminates seasonal revenue fluctuations common in outdoor assets.",
    tileColor: "#3B82F6",
  },
  {
    id: 5,
    tagbar: null,
    glyph: FaThLarge,
    headingLarge: "35+",
    headingMedium: "Attractions",
    mainContent:
      "High-density entertainment offering designed to maximize throughput and visitor engagement.",
    tileColor: "#10B981",
  },
  {
    id: 6,
    tagbar: null,
    glyph: SiLucid,
    headingLarge: "3",
    headingMedium: "Global Firsts",
    mainContent:
      "TMNT Shellraiser, Skyline Scream, and The Shredder drive viral marketing and enthusiast tourism.",
    tileColor: "#FB923C",
  },
  {
    id: 7,
    tagbar: null,
    glyph: FaRulerCombined,
    headingLarge: "33,000",
    headingMedium: "Parking Spaces",
    mainContent:
      "Low-friction infrastructure supports high-volume attendance and seamless visitor flow.",
    tileColor: "#3B82F6",
  },
  {
    id: 8,
    tagbar: null,
    glyph: TbAtom2Filled,
    headingLarge: null,
    headingMedium: '36" – 52"+',
    mainContent:
      "Wide demographic servicing from toddlers to thrill-seekers ensures inclusive entertainment.",
    tileColor: "#10B981",
  },
  {
    id: 9,
    tagbar: null,
    glyph: FaClock,
    headingLarge: null,
    headingMedium: "180 Mins",
    mainContent:
      "Average brand dwell time per visitor exceeds 3 hours, maximizing exposure and spend.",
    tileColor: "#FB923C",
  },
  {
    id: 10,
    tagbar: null,
    glyph: FaCalendarDay,
    headingLarge: null,
    headingMedium: "Prime Location",
    mainContent:
      "Captures the wealthiest metro market in the U.S. with unparalleled accessibility.",
    tileColor: "#3B82F6",
  },
];
