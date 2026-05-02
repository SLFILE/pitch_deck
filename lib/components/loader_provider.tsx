import React from "react";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("../components/loader"), {
  ssr: false,
});

const LoaderProvider = () => {
  return <Loader />;
};

export default LoaderProvider;
