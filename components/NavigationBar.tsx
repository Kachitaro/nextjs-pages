import LazyImage from "./LazyImage";
import { NavbarLink } from "@/common";
import Link from "next/link";
import { Form, Nav, Navbar, Container, Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <LazyImage src={"/logo.svg"} alt={"logo"} /> Mercedes Benz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {NavbarLink.map((link, index) => (
              <Link key={index} href={link.href} className="nav-link">
                {link.icon && (
                  <LazyImage
                    src={link.icon}
                    alt={link.label}
                    height={24}
                    width={24}
                  />
                )}
                <span className="ms-1"> </span>
                {link.label}
              </Link>
            ))}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
