"use client";
import Image from "next/image";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightBoxImageProps {
  imgSrc: string;
}

const LightBoxImage: React.FC<LightBoxImageProps> = ({ imgSrc }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div
        className="aspect-video w-full sm:w-96 relative rounded-md overflow-hidden cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Image
          src={imgSrc}
          alt="work image"
          fill
          sizes="(max-width: 640px) 100vw, 640px"
          priority
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: imgSrc }]}
      />
    </>
  );
};

export default LightBoxImage;
