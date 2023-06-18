import React from "react";
import Container from "react-bootstrap/esm/Container";
import xbox from "../../assets/xbox.png";
import "./LandingPage.scss";
import CommonButton from "../button/CommonButton";

const LandingPage = () => {
  return (
    <Container>
      <section id="home">
        <div style={{ background: "#ffeaeb" }}>
          <div className="d-flex main">
            <div style={{ alignSelf: "center", width: "60%" }}>
              <h2>X-Box For Your Living Room</h2>
              <p>
                Contrary to popular belief, Lorem lpsum is not simply random
                text. It has roots in a piece of classical Latin literature.
              </p>

              <h1 style={{ color: "#d7417a" }}>$600</h1>
              {/* Buy Now button (props) */}
              <CommonButton text={"Buy Now"} />
            </div>
            <div style={{ width: "40%" }}>
              <img src={xbox} alt="" style={{ height: "300px" }}></img>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default LandingPage;
