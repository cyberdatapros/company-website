"use client";
import useWindowDimensions from "@/utils/useWindowDemensions";
import React, { useState } from "react";
import styles from "@/css/nav.module.css";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavWrapper = () => {
  const { width } = useWindowDimensions();
  const [showMobileNav, setMobileNav] = useState<boolean>(false);
  const triggerMobileNav = () => {
    setMobileNav(!showMobileNav);
  };

  if (width === 0) {
    return (
      <div
        className={styles["nav-wrapper"]}
        style={{
          backgroundColor: "#ffffff2e",
        }}
      ></div>
    );
  }

  return (
    <>
      {showMobileNav ? (
        <MobileNav triggerMobileNav={triggerMobileNav} />
      ) : (
        <DesktopNav windowSize={width} triggerMobileNav={triggerMobileNav} />
      )}
    </>
  );
};

export default NavWrapper;
