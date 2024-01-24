import React from "react";

const LoadingContainer = ({ height }: { height: string | number }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: height || 600,
      }}
    >
      <span className="loader"></span>
    </div>
  );
};

export default LoadingContainer;
