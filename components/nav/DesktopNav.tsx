"use client";
import React, { useEffect, useState } from "react";
import styles from "@/css/nav.module.css";
import { Menu } from "antd";
import links from "./NavLinks";

const DesktopNav = ({
  windowSize,
  triggerMobileNav,
}: {
  windowSize: number;
  triggerMobileNav: () => void;
}) => {
  const [color, setColor] = useState("#ffffff2e");

  const listenScrollEvent = () => {
    if (window.scrollY < 45) {
      setColor("#ffffff2e");
    } else {
      setColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div
      className={styles["nav-wrapper"]}
      style={{
        backgroundColor: color,
      }}
    >
      <img
        style={{
          marginRight: 50,
        }}
        src={
          "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705763925/cdp-logo-dark_zhnv53.svg"
        }
        alt={"company logo"}
        width={200}
        height={100}
      />
      {windowSize < 800 ? (
        <img
          src="https://res.cloudinary.com/dzqp0dnia/image/upload/v1705752836/icons/1_iolcif.svg"
          width={25}
          height={25}
          onClick={() => triggerMobileNav()}
          aria-label="button"
        ></img>
      ) : (
        <Menu
          triggerSubMenuAction="click"
          style={{
            background: "transparent",
            listStyleType: "none",
          }}
          mode="horizontal"
          items={links}
        />
      )}
    </div>
  );
};

export default DesktopNav;
