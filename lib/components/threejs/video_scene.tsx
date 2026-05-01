import { useVideo } from "@/lib/hooks/three/useVideo";
import * as THREE from "three";

type VideoConfig = {
  scene: THREE.Group | THREE.Scene;
  video_data: { target: string; curl: string };
};

const VideoScene = ({ scene, video_data }: VideoConfig) => {
  useVideo(scene, video_data);
  return null;
};

export default VideoScene;
