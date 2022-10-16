import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PageArrow from "../../components/PageArrow";
import Profile from "../../components/Profile";
import SearchBar from "../../components/SearchBar";
import { ArrowWrapper } from "./styles.elements";
function CollapsibleExample() {
  const [products, setProducts] = useState([]);
  const handleProductChange = (value: any) => {
    setProducts(value);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant="light"
      style={{ backgroundColor: "#0C0D21"}}
      fixed="top"
    >
      <Navbar.Collapse
        id="responsive-navbar-nav"
        style={{ marginLeft: "400px" }}
      >
        <Nav className="me-auto" style={{columnGap:"30px", height:"41px"}}>
          <ArrowWrapper>
            <PageArrow side="left" />
            <PageArrow side="right" />
          </ArrowWrapper>

          <SearchBar result={products} onChange={handleProductChange} />
        </Nav>
        <Nav>
          <Profile />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
// return (
//   <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
//     <Navbar.Toggle
//       aria-controls="navbarScroll"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarScroll"
//     />
//     <Navbar.Collapse id="navbarScroll">
//       <Nav>
//         <NavLink eventKey="1">Home</NavLink>
//         <NavLink eventKey="2">About</NavLink>
//         <NavLink eventKey="3">Contact</NavLink>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );
