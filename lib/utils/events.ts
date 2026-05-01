import {
  FaCalendarAlt,
  FaMusic,
  FaUsers,
  FaGlobe,
  FaChild,
  FaBasketballBall,
  FaWineBottle,
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

export const EventsData: FeatureBlock[] = [
  { id: 0, branch: "American Dream Events 2026" },

  {
    id: 1,
    tagbar: "Concert",
    glyph: FaMusic,
    headingLarge: "French Montana Live",
    headingMedium: "June 12–13, 2026",
    mainContent:
      "Dream Live Performing Arts Center hosts French Montana for two nights of hip-hop energy.",
    tileColor: "#3B82F6",
  },
  {
    id: 2,
    tagbar: "Culture",
    glyph: FaGlobe,
    headingLarge: "Fiesta in America",
    headingMedium: "Annual Festival",
    mainContent:
      "Multicultural celebration with performances, exhibits, and food highlighting diverse communities.",
    tileColor: "#10B981",
  },
  {
    id: 3,
    tagbar: "Family",
    glyph: FaChild,
    headingLarge: "Animal Crossing Aquarium Tour",
    headingMedium: "Apr–Jun 2026",
    mainContent:
      "SEA LIFE Aquarium transforms into a themed adventure with Nintendo’s Animal Crossing characters.",
    tileColor: "#FB923C",
  },
  {
    id: 4,
    tagbar: "Sports",
    glyph: FaBasketballBall,
    headingLarge: "Victory Fighting Championship",
    headingMedium: "May 16, 2026",
    mainContent:
      "Havoc on the Hudson brings MMA action to The Arena with top fighters competing.",
    tileColor: "#3B82F6",
  },
  {
    id: 5,
    tagbar: "Community",
    glyph: FaUsers,
    headingLarge: "AAPI Seminar",
    headingMedium: "Apr 30, 2026",
    mainContent:
      "Stories That Shape Us — a seminar highlighting Asian American and Pacific Islander voices.",
    tileColor: "#10B981",
  },
  {
    id: 6,
    tagbar: "Lifestyle",
    glyph: FaWineBottle,
    headingLarge: "R&B Wine Fridays",
    headingMedium: "Apr–May 2026",
    mainContent:
      "Marcus Live! hosts weekly wine and R&B nights blending music, food, and social vibes.",
    tileColor: "#FB923C",
  },
  {
    id: 7,
    tagbar: "Global",
    glyph: FaCalendarAlt,
    headingLarge: "FIFA World Cup FanFest",
    headingMedium: "Jun–Jul 2026",
    mainContent:
      "Massive watch parties, celebrity appearances, and mall-wide celebrations during FIFA World Cup at MetLife Stadium.",
    tileColor: "#3B82F6",
  },
];
