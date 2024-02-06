"use client";
import React, { useEffect, useState } from "react";
import styles from "@/css/nav.module.css";
import { Menu } from "antd";
import links from "./NavLinks";
import Image from "next/image";
import Link from "next/link";

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
        backgroundColor: "white",
      }}
    >
      <Link href={"/"}>
        <Image
          style={{
            marginRight: 50,
          }}
          src={
            "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705801083/cdp-logo-blue_jiknqi.png"
          }
          alt={"company logo"}
          width={180}
          height={90}
        />
      </Link>
      {windowSize < 800 ? (
        <Image
          src="https://res.cloudinary.com/dzqp0dnia/image/upload/v1705752836/icons/1_iolcif.svg"
          width={25}
          height={25}
          onClick={() => triggerMobileNav()}
          alt="close mobile menu"
          aria-label="button"
        />
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
