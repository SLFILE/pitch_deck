"use client";
import React, { useState } from "react";
import { ThreeEvent } from "@react-three/fiber";

import { Bounds, useBounds, useGLTF } from "@react-three/drei";

import { ModelConfig } from "@/lib/utils/model";

import { Videos } from "@/lib/utils/video";
import Board from "@/lib/components/board";

import GlobalScene from "@/lib/components/global";

import VideoPlayer from "@/lib/components/video";
import { useAudio } from "@/lib/hooks/three/useAudio";

import { KPI, KPIOMap } from "@/lib/kpi/KPI";
import { FeatureBlock } from "@/lib/kpi/sealife/kpi_data_sealife";
import { Audio } from "@/lib/utils/audio";

import VideoScene from "@/lib/components/threejs/video_scene";

import { useFrame } from "@react-three/fiber";

import { SiGoogledisplayandvideo360 } from "react-icons/si";

const ZoomMotion = ({
  children,
  setSelectedVideo,
  onSelect,
  handleKPI,
}: {
  children: React.ReactNode;
  setSelectedVideo: (val: string) => void;
  onSelect: (val: boolean) => void;
  handleKPI: (val: FeatureBlock[]) => void;
}) => {
  const clickSound = useAudio(Audio.click_alpha.url);

  const boundApi = useBounds();

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (
      e.object &&
      e.object.name !== "v_board_3" &&
      e.object.name !== "vboard_1" &&
      e.object.name !== "board_1"
    ) {
      onSelect(true);
    }

    if (e.object.name === "v_board_3") {
      setSelectedVideo(video_texture_info.vboard_3.url);
    } else if (e.object.name === "vboard_1") {
      setSelectedVideo(video_texture_info.vboard_1.url);
    } else if (e.object.name === "board_1") {
      setSelectedVideo(video_texture_info.board_1.url);
    }
    clickSound();

    setTimeout(() => {
      boundApi.refresh(e.object).fit();

      let objectName = e.object?.parent?.name;
      console.log("CHECK", objectName);
      if (objectName) {
        const kpi = KPIOMap[objectName];
        kpi && handleKPI(kpi);
      }
    }, 500);
  };

  const handleMissedClick = (e: MouseEvent) => {
    if (e.button === 0) {
      onSelect(false);

      setTimeout(() => {
        boundApi.refresh().fit();
      }, 500);

      clickSound();
    }
  };

  return (
    <group
      onClick={(e) => handleClick(e)}
      onPointerMissed={(e) => handleMissedClick(e)}
    >
      {children}
    </group>
  );
};

const video_texture_info = {
  vboard_3: {
    target: "v_board_3",
    curl: Videos.avenue.curl,
    url: Videos.avenue.url,
  },
  vboard_1: {
    target: "vboard_1",
    curl: Videos.mall_intro.curl,
    url: Videos.mall_intro.url,
  },
  board_1: {
    target: "board_1",
    curl: Videos.explore.curl,
    url: Videos.explore.url,
  },
};

const Animate = () => {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

function Avenu(model: ModelConfig) {
  const { scene } = useGLTF(model.file);
  const [select, setSelect] = useState(false);
  const [videEnlarge, setVideoEnlarge] = useState(false);
  const [currentKPI, setCurrentKPI] = useState(KPI.sealife);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const handleKPI = (kpi: FeatureBlock[]) => {
    setCurrentKPI(kpi);
  };

  return (
    <div className="w-full h-full relative">
      <GlobalScene>
        <Bounds fit clip observe margin={1.2}>
          <ZoomMotion
            onSelect={setSelect}
            handleKPI={handleKPI}
            setSelectedVideo={setSelectedVideo}
          >
            <primitive
              onPointerOver={() => (document.body.style.cursor = "pointer")}
              onPointerOut={() => (document.body.style.cursor = "auto")}
              object={scene}
            />
          </ZoomMotion>
        </Bounds>
        <VideoScene scene={scene} video_data={video_texture_info.vboard_3} />
        <VideoScene scene={scene} video_data={video_texture_info.vboard_1} />
        <VideoScene scene={scene} video_data={video_texture_info.board_1} />
      </GlobalScene>

      <Board isOpen={select} KPI={currentKPI} onClose={setSelect}></Board>
      {selectedVideo && (
        <div className="fixed bottom-20 right-6 z-9999">
          <button
            onClick={() => setVideoEnlarge(true)}
            className="group flex cursor-pointer items-center gap-3 px-4 py-2 bg-black/20 hover:bg-black/30 border border-white/10 backdrop-blur-md rounded-full transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center gap-0.75 h-4 w-6 justify-center">
              <SiGoogledisplayandvideo360 color="white" />
            </div>
          </button>
        </div>
      )}

      {videEnlarge && (
        <VideoPlayer
          isOpen={videEnlarge}
          onClose={setVideoEnlarge}
          videoSrc={selectedVideo}
        />
      )}
    </div>
  );
}

export default Avenu;
