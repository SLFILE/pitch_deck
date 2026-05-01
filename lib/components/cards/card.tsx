import React from "react";

import Image from "next/image";
interface CardProp {
  id: number;
  tagbar?: string | null;
  glyph?: React.ComponentType | null;
  headingLarge?: string | null;
  headingMedium?: string | null;
  mainContent?: string | null;
  tileColor?: string | null;
  imageUri?: string | null;
}

const CardK = ({
  id,
  tagbar,
  glyph: Glyph,
  headingLarge,
  headingMedium,
  mainContent,
  tileColor,
  imageUri,
}: CardProp) => {
  const styles = { "--tile-color": tileColor } as React.CSSProperties;

  return (
    <div
      style={styles}
      className=" bg-[var(--tile-color,rgba(26,28,32,0.6))]  p-5 mt-2.5 backdrop-blur-xl border-l md:border border-white/10 rounded-sm md:rounded-2xl text-white z-10 shadow-2xl transition-all duration-500"
    >
      {tagbar && (
        <div className="bg-white/20 pl-2 rounded-full ">
          <p>{tagbar}</p>
        </div>
      )}

      {imageUri && <Image src={imageUri} alt="" />}
      {Glyph && (
        <div className="bg-white/20 p-2 m-2 w-8 rounded-full ">
          <Glyph />
        </div>
      )}
      <section>
        {headingLarge && <h1 className="text-5xl pt-2 pb-2">{headingLarge}</h1>}

        {headingMedium && (
          <h1 className="text-2xl pt-2 pb-2">{headingMedium}</h1>
        )}
        {mainContent && <h5 className="line-clamp-6">{mainContent}</h5>}
      </section>
    </div>
  );
};

export default CardK;
