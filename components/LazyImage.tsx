import classNames from "classnames";
import { Image } from "react-bootstrap";

type LazyImageProps = {
  src: string;
  width?: number | string;
  height?: number | string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  aspectRatio?: string;
  alt: string;
  borderRadius?: string | number;
  shadow?: boolean;
};
const LazyImage = ({
  src,
  width,
  height,
  objectFit = "cover",
  aspectRatio,
  alt,
  borderRadius = 4,
  shadow = false,
}: LazyImageProps) => {
  return (
    <Image
      className={classNames("position-relative", { shadow })}
      src={src}
      style={{
        objectFit,
        aspectRatio,
        borderRadius,
        width,
        height,
      }}
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
    />
  );
};

export default LazyImage;
