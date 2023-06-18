import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import watch from "../../assets/Lorus watches.png";
import bag from "../../assets/Backpack-black.png";
import nikeBlue from "../../assets/nike-blueshoe.png";
import ShoeProductCards from "../card/ShoeProductCards";
import { BackpackData, ShoeData } from "../products/Products";
import BackpackProductCards from "../card/BackpackProductCards";
import AllProductCards from "../card/AllProductCards";
import "./Main.scss";

const Main = () => {
  const combinedArray = [ShoeData, BackpackData];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredData, setFilteredData] = useState();

  const handleBagClick = () => {
    setSelectedCategory("Bag");

    // Filter the data for the selected category (Bag)
    const filtered = combinedArray.filter((item) => item.category === "Bag");
    setFilteredData(filtered);
  };

  const handleShoeClick = () => {
    setSelectedCategory("Shoes");

    // Filter the data for the selected category (Shoes)
    const filtered = combinedArray.filter((item) => item.category === "Shoes");
    setFilteredData(filtered);
  };

  return (
    <div>
      <Container>
        {/* Listing items */}

        <div className="Listing">
          <Row>
            <Col md="4">
              <div className=" d-flex watchListing">
                <div>
                  <h4>Watch</h4>
                </div>
                <img
                  src={watch}
                  alt=""
                  style={{ height: "75px", width: "75px" }}
                ></img>
              </div>
            </Col>

            {/* bag */}
            <Col md="4">
              <div className="d-flex bagListing" onClick={handleBagClick}>
                <h4>Bag</h4>
                <img
                  src={bag}
                  alt=""
                  style={{ height: "75px", width: "75px" }}
                ></img>
              </div>
            </Col>

            {/* shoes */}
            <Col md="4">
              <div className="d-flex shoeListing" onClick={handleShoeClick}>
                <h4>Shoes</h4>
                <img
                  src={nikeBlue}
                  alt=""
                  style={{ height: "75px", width: "75px" }}
                ></img>
              </div>
            </Col>
          </Row>
        </div>

        {/* display cards */}

        <section style={{ textAlign: "-webkit-center" }}>
          {selectedCategory === "Shoes" ? (
            <ShoeProductCards data={filteredData} />
          ) : selectedCategory === "Bag" ? (
            <BackpackProductCards data={filteredData} />
          ) : (
            <AllProductCards data={filteredData} />
          )}
        </section>
      </Container>
    </div>
  );
};

export default Main;
