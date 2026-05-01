import { ThreePointLightConfig } from "../utils/lighting";

const ThreeLight = (LightPreset: ThreePointLightConfig) => {
  const lights = LightPreset;
  return (
    <>
      {Object.entries(lights).map(([light_name, property]) => (
        <directionalLight
          key={light_name}
          position={property.position}
          intensity={property.intensity}
          color={property.color}
        />
      ))}
    </>
  );
};

export default ThreeLight;
