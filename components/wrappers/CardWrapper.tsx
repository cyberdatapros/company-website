import React from "react";
import styles from "@/css/card-container.module.css";

const CardWrapper = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return <div className={styles["responsive-card-container"]}>{children}</div>;
};

export default CardWrapper;
