import React from "react";
import style from "@/css/compliance-carousel.module.css";
import { complianceBadges } from "@/data/complianceBadgesDashboard";
import Image from "next/image";

const listItems = complianceBadges.map(({ title, image, color }, index) => (
  <div
    key={title}
    className={style["compliance-slide-item"]}
    style={{
      backgroundColor: color,
    }}
  >
    <Image
      key={title}
      src={image}
      width={100}
      height={100}
      alt={`${title} badge`}
    />
    <p>{title}</p>
  </div>
));

const ComplianceCarorusel = () => {
  return (
    <div className={style["compliance-slider"]}>
      <div className={style["compliance-slide-track"]}>{listItems}</div>
    </div>
  );
};

export default ComplianceCarorusel;
