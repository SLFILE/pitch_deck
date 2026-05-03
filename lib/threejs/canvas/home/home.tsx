"use client";
import React, { useState } from "react";
import { ThreeEvent } from "@react-three/fiber";

import { Bounds, useBounds } from "@react-three/drei";

import { ModelConfig, models } from "@/lib/utils/model";

import { Videos } from "@/lib/utils/video";
import Board from "@/lib/components/board";
import * as THREE from "three";
import GlobalScene from "@/lib/components/global";

import VideoPlayer from "@/lib/components/video";
import { useAudio } from "@/lib/hooks/three/useAudio";

import { KPI, KPIOMap } from "@/lib/kpi/KPI";
import { FeatureBlock } from "@/lib/kpi/sealife/kpi_data_sealife";
import { Audio } from "@/lib/utils/audio";
import dynamic from "next/dynamic";
import VideoScene from "@/lib/components/threejs/video_scene";
import ImageView from "@/lib/components/image_view";
import { useFrame } from "@react-three/fiber";
import { Images } from "@/lib/utils/image";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { useRef } from "react";
import { FaImage } from "react-icons/fa";

const DracoModel = dynamic(() => import("@/lib/components/threejs/draco"), {
  ssr: false,
});

const ZoomMotion = ({
  children,
  setSelectedVideo,
  setSelectedImage,
  onSelect,
  handleKPI,
}: {
  children: React.ReactNode;
  setSelectedVideo: (val: string) => void;
  setSelectedImage: (val: string) => void;
  onSelect: (val: boolean) => void;
  handleKPI: (val: FeatureBlock[]) => void;
}) => {
  const clickSound = useAudio(Audio.click_alpha.url);

  const boundApi = useBounds();

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const mesh = e.object.name;

    if (mesh && !(mesh in video_texture_info) && !/^board_[1-8]$/.test(mesh)) {
      onSelect(true);
    }

    if (mesh && mesh in video_texture_info) {
      setSelectedVideo(
        video_texture_info[mesh as keyof typeof video_texture_info].url,
      );
    }

    if (/^board_[1-8]$/.test(e.object.name)) {
      setSelectedImage("fifa_cup.jpg");
    }

    clickSound();

    setTimeout(() => {
      boundApi.refresh(e.object).fit();

      let objectName = e.object?.parent?.name;

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
  v_board_3: {
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
  const modelRef = useRef<THREE.Group>(null);
  const [select, setSelect] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [videEnlarge, setVideoEnlarge] = useState(false);
  const [currentKPI, setCurrentKPI] = useState(KPI.sealife);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageView, setImageView] = useState(false);
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
            setSelectedImage={setSelectedImage}
            setSelectedVideo={setSelectedVideo}
          >
            <DracoModel
              ref={modelRef}
              model_uri={models.mall.file}
              onUpdate={(self: any) => {
                if (!isReady && self) setIsReady(true);
              }}
              onPointerOver={() => (document.body.style.cursor = "pointer")}
              onPointerOut={() => (document.body.style.cursor = "auto")}
            />
          </ZoomMotion>
        </Bounds>
        {isReady && modelRef.current && (
          <>
            <VideoScene
              scene={modelRef.current as THREE.Group}
              video_data={video_texture_info.v_board_3}
            />
            <VideoScene
              scene={modelRef.current as THREE.Group}
              video_data={video_texture_info.vboard_1}
            />
            <VideoScene
              scene={modelRef.current as THREE.Group}
              video_data={video_texture_info.board_1}
            />{" "}
          </>
        )}
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

      {selectedImage && (
        <div className="fixed bottom-35 right-6 z-9999">
          <button
            onClick={() => setImageView(true)}
            className="group flex cursor-pointer items-center gap-3 px-4 py-2 bg-black/20 hover:bg-black/30 border border-white/10 backdrop-blur-md rounded-full transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center gap-0.75 h-4 w-6 justify-center">
              <FaImage color="white" />
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

      {<ImageView isOpen={imageView} onClose={setImageView} items={Images} />}
    </div>
  );
}

export default Avenu;
