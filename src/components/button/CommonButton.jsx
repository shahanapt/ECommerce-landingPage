import React from "react";
import { Button } from "react-bootstrap";

const CommonButton = ({ text }) => {
  return (
    <div>
      <Button
        style={{
          border: "none",
          background: "rgb(97 14 49)",
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
