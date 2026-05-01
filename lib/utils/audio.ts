export interface AudioConfig {
  id: number;
  name: string;
  url: string;
}

export const Audio: Record<string, AudioConfig> = {
  ambient_alpha: {
    id: 1,
    name: "Ambient sound alpha",
    url: "/audio/ambient_alpha.mp3",
  },
  ambient_beta: {
    id: 2,
    name: "Ambient sound beta",
    url: "/audio/ambient_beta.mp3",
  },
  click_beta: {
    id: 3,
    name: "Click sound alpha",
    url: "/audio/click_beta.mp3",
  },
  click_alpha: {
    id: 4,
    name: "Click sound beta",
    url: "/audio/click_alpha.mp3",
  },
};
