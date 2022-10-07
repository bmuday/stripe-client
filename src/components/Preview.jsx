import React from "react";

const Preview = ({ value }) => {
  return (
    <div className="preview" style={{ backgroundColor: `${value}` }}>
      {value}
    </div>
  );
};

export default Preview;
