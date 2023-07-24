import React from "react";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Navbar.scss";

const Header = () => {
  // total quantity of cart
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  console.log(cartTotalQuantity);
  return (
    <Navbar style={{ height: "90px" }}>
      <Container
        style={{
          background: "white",
          position: "fixed",
          margin: "0 100px",
          color: "rgb(97 14 49)",
        }}
      >
        <Nav className="navItems">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Navbar.Toggle />

        {/* navbar cart */}

        <div className="justify-content-end">
          <div className="cart-quantitiy">
            <span className="cart-counter">{cartTotalQuantity}</span>
            <Nav.Link
              style={{
                color: "white",
                background: "rgb(97 14 49)",
                borderRadius: "100px",
                height: "40px",
              }}
            >
              <Link to="/cart">
                <BsCart4
                  style={{ height: "30px", width: "45px", color: "white" }}
                />
              </Link>
            </Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
