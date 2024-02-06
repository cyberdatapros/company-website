"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/css/drop-down-content.module.css";

const plusIcon =
  "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705752946/icons/6_me6ey2.svg";
const minusIcon =
  "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705752947/icons/7_urlnwy.svg";
const DropDownContent = ({
  buttonText,
  downText,
}: {
  buttonText: string;
  downText: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        maxWidth: 450,
      }}
    >
      <button
        className={styles["dropdown-trigger-button"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonText}
        <Image
          src={isOpen ? minusIcon : plusIcon}
          alt={""}
          width={18}
          height={18}
        />
      </button>
      {isOpen && (
        <p
          className={styles["dropdown-content"]}
          dangerouslySetInnerHTML={{ __html: [downText] }}
        />
      )}
    </div>
  );
};

export default DropDownContent;
