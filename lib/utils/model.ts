export interface ModelConfig {
  id: string;
  name: string;
  file: string;
  scale: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
  description: string;
}

export const models: Record<string, ModelConfig> = {
  mall: {
    id: "mall",
    name: "American Dream Mall",
    file: "/models/american_dream_mall.glb",
    scale: [1, 1, 1],
    position: [166, 18, -30],
    rotation: [0, 0, 0],
    description: "Main mall structure with dome and signage",
  },

  mall_logo: {
    id: "mall_logo",
    name: "American dream mall logo",
    file: "/models/american_dream_logo.glb",
    scale: [0.5, 0.5, 0.5],
    position: [0, 0, 0],
    rotation: [Math.PI / 2, 0, 0],
    description: "Exterior signage with branding",
  },
};
