import React from "react";
import Slider from "react-slick";
import LazyImage from "./LazyImage";
import { Container } from "react-bootstrap";
import { image } from "@/common";
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction?: string;
}
function Arrow(props: ArrowProps) {
  const { className, style, onClick, direction = "left" } = props;
  const arrowStyle: React.CSSProperties = {
    ...style,
    zIndex: 1,
    cursor: "pointer",
    [direction === "left" ? "right" : "left"]: "100px",
  };
  return <div className={className} style={arrowStyle} onClick={onClick} />;
}

export const CustomCarousel = () => {
  const settings = {
    //dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <Arrow direction={"left"} />,
    prevArrow: <Arrow direction={"right"} />,
  };
  return (
    <Slider {...settings}>
      {image.map((item) => (
        <div key={item.id}>
          <div
            className="w-100 py-4 position-relative"
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#000",
            }}>
            <div className="position-absolute top-0 left-0 w-100 h-100 bg-opacity-75" />
            <Container fluid="lg">
              <LazyImage
                src={item.url}
                alt={`banner-${item.id}`}
                width={"100%"}
                height={"auto"}
                aspectRatio="5/2"
                borderRadius={0}
              />
            </Container>
          </div>
        </div>
      ))}
    </Slider>
  );
};
