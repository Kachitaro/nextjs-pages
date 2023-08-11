import { Container } from "react-bootstrap";
import LazyImage from "./LazyImage";

export default function Header() {
  return (
    <div
      className="w-100 py-4 position-relative"
      style={{
        backgroundImage: `url(https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/models/saloon/c-class/amg/_jcr_content/root/responsivegrid/simple_stage.component.damq4.3353695239005.jpg/mercedes-amg-c-class-w206-stage-3840x1707-08-2022.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="position-absolute top-0 left-0 w-100 h-100 bg-opacity-75" />
      <Container fluid="lg">
        <LazyImage
          src={
            "https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/models/saloon/c-class/amg/_jcr_content/root/responsivegrid/simple_stage.component.damq4.3353695239005.jpg/mercedes-amg-c-class-w206-stage-3840x1707-08-2022.jpg"
          }
          alt="banner"
          width={"100%"}
          height={"auto"}
          aspectRatio="5/2"
          borderRadius={0}
        />
      </Container>
    </div>
  );
}
