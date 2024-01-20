import { Menu } from "antd";
import React from "react";
import links from "./NavLinks";
import style from "@/css/nav.module.css";

const MobileNav = ({ triggerMobileNav }: { triggerMobileNav: () => void }) => {
  return (
    <div className={style["mobile-nav-wrapper"]}>
      <div className={style["mobile-logo-container"]}>
        <img
          src={
            "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705754252/cdp-logo-dark_bbikgh.svg"
          }
          alt={"company logo"}
          width={220}
          height={110}
        />
        <img
          src={
            "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705752943/icons/3_zwfnpa.svg"
          }
          onClick={() => triggerMobileNav()}
          alt={"close menu"}
          width={18}
          height={18}
        />
      </div>
      <Menu
        triggerSubMenuAction="click"
        multiple={false}
        style={{
          listStyleType: "none",
          width: "100%",
          fontSize: 16,
          fontWeight: 500,
          textTransform: "capitalize",
          backgroundColor: "transparent",
          color: "white",
          marginTop: 70,
        }}
        mode="inline"
        items={links}
      />
    </div>
  );
};

export default MobileNav;
