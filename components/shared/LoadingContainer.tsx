import React from "react";
import PageWrapper from "../wrappers/PageWrapper";

const LoadingContainer = ({ height }: { height: string | number }) => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default LoadingContainer;
