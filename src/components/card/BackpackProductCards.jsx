import React from "react";
import { BackpackData } from "../products/Products";
import { Button, Card, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import "./ProductCards.scss";

const BackpackProductCards = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <section>
        <Row id="backpack">
          <div className="card-heading">
            <h3>Backpack</h3>
          </div>
          {BackpackData.map((item, index) => (
            <Col md="4" key={index}>
              <Card className="productCard">
                <div className="productCard-details">
                  <div>
                    <img
                      src={item?.imgSrc}
                      alt=""
                      className="productCard-image"
                    />
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <h5>{item?.title}</h5>
                    <p>{item?.description}</p>
                    <h5>${item?.price}</h5>
                  </div>
                  <div>
                    <Button
                      className="productCardButton"
                      onClick={() => handleAddToCart(item)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default BackpackProductCards;
