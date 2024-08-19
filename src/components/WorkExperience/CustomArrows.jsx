import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#ffffff", // Purple background color
        borderRadius: "50%",
        right: "10px",
        zIndex: "1",
        width: "50px", // Larger button
        height: "50px", // Larger button
        display: "flex", // Ensures content is centered
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}>
      <span style={{ color: "white", fontSize: "20px" }}></span> {/* White arrow text */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#ffffff", // Purple background color
        borderRadius: "50%",
        left: "10px",
        zIndex: "1",
        width: "50px", // Larger button
        height: "50px", // Larger button
        display: "flex", // Ensures content is centered
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}>
      <span style={{ color: "white", fontSize: "20px" }}></span> {/* White arrow text */}
    </div>
  );
};

export { NextArrow, PrevArrow };
