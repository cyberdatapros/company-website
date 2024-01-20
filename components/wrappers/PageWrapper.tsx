import React from "react";
import styles from "@/css/page-wrapper.module.css";

const PageWrapper = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <main
      className={styles.wrapper}
      style={{
        ...style,
      }}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
