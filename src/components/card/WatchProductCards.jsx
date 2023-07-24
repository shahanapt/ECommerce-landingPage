import React from "react";
import { WatchData } from "../products/Products";
import { Button, Card, Row, Col } from "react-bootstrap";
import "./ProductCards.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const WatchProductCards = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <section>
        <Row id="watches">
          <div className="card-heading">
            <h3>Watches</h3>
          </div>
          {WatchData.map((item, index) => (
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
                      onClick={() => handleAddToCart(item)}
                      className="productCardButton"
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

export default WatchProductCards;
