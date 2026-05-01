import * as THREE from "three";

import { Html, Line } from "@react-three/drei";

type vector = [number, number, number];

interface ToolTipPropConfig {
  position: vector;
  title: string;
  description: string;
}
const ToolTip = ({ position, title, description }: ToolTipPropConfig) => {
  const labelOffset = new THREE.Vector3(-10, 10, 0);
  const start = position;

  const end: vector = [
    position[0] + labelOffset.x,
    position[1] + labelOffset.y,
    position[2] + labelOffset.z,
  ];

  const elbow: vector = [start[0], end[1], start[2]];
  const targetPosition = new THREE.Vector3(...position).add(labelOffset);
  return (
    <group>
      <Line
        points={[start, elbow, end]}
        color="white"
        lineWidth={1}
        transparent
        opacity={0.5}
      />

      <Html position={targetPosition.toArray()} center distanceFactor={10}>
        <div
          style={{
            background: "white",
            padding: "10px 15px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            width: "2000px",
            height: "2000px",
            pointerEvents: "none",
            color: "black",
            fontFamily: "sans-serif",
          }}
        >
          <h4 style={{ margin: "0 0 5px 0", fontSize: "14px" }}>{title}</h4>
          <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
            {description}
          </p>
        </div>
      </Html>
    </group>
  );
};

export default ToolTip;
