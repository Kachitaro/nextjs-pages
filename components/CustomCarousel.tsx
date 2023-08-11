import React from "react";
import Slider from "react-slick";
import LazyImage from "./LazyImage";
import { Container } from "react-bootstrap";
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
  const image = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const settings = {
    dots: true,
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
              backgroundColor: "red",
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
