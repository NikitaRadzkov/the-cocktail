import React from "react";

import { ImageProps } from "./types";

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = 350,
  height = 350,
}) => {
  return (
    <img width={width} height={height} src={src} alt={alt} loading="lazy" />
  );
};

export default Image;
