import { Text3D } from "@react-three/drei";

const Texts = ({ text }: { text: string }) => {
  return (
    <>
      <Text3D
        font={"/font/gesit_mono.json"}
        size={20}
        height={0.2}
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.02}
      >
        {text}
        <meshStandardMaterial
          color="red"
          emissive="white"
          emissiveIntensity={1}
        />
      </Text3D>
    </>
  );
};

export default Texts;
