import React from "react";
import { Button } from "react-bootstrap";

const CommonButton = ({ text }) => {
  return (
    <div>
      <Button
        style={{
          border: "none",
          background: "#fd4c98",
          width: "100px",
          height: "40px",
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default CommonButton;
