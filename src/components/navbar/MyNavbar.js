import "./MyNavbar.css";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";

function MyNavbar() {
  const expand = "md";
  return (
    <div>
      <Navbar
        key={expand}
        expand={expand}
        style={{ backgroundColor: " #719192" }}
      >
        <Container>
          <Navbar.Brand className="lalezar fs-4" href="#">
            حرفه هنرمند
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header
              style={{ backgroundColor: " #719192" }}
              closeButton
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                حرفه هنرمند
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/">
                  صفحه اصلی
                </NavLink>
                <NavLink className="nav-link" to="/add-article">
                  ساخت مقاله
                </NavLink>
                <NavLink className="nav-link" to="/articles">
                  مقالات
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  درباره ما
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
