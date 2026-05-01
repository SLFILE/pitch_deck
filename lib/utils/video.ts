export interface VideoConfig {
  id: number;
  name: string;
  url: string;
  curl: string;
}

export const Videos: Record<string, VideoConfig> = {
  avenue: {
    id: 1,
    name: "Avenu",
    url: "/videos/avenue.mp4",
    curl: "/videos/avenue_c.mp4",
  },
  mall_intro: {
    id: 2,
    name: "Mall intro",
    url: "/videos/mall_intro.mp4",
    curl: "/videos/mall_intro_c.mp4",
  },
  avenue_sales: {
    id: 3,
    name: "Avenu Sales",
    url: "/videos/avenu_sales.mp4",
    curl: "/videos/avenu_sales_c.mp4",
  },
  explore: {
    id: 3,
    name: "Amerecan dream mall intro ",
    url: "/videos/explore.mp4",
    curl: "/videos/explore_c.mp4",
  },
} as const;
