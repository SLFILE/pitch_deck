"use client";

import { models } from "@/lib/utils/model";
import dynamic from "next/dynamic";
import Loader from "@/lib/components/loader";
import LoaderProvder from "@/lib/components/loader_provider";
import { Suspense, useEffect } from "react";
const Home = dynamic(() => import("@/lib/threejs/canvas/home/home"), {
  ssr: false,
  loading: () => <LoaderProvder />,
});

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center ">
      <Suspense fallback={<Loader />}>
        <Home {...models.mall} />
      </Suspense>
    </div>
  );
}
