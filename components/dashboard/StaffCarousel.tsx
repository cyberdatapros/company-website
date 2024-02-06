"use client";
import React, { useEffect, useRef, useState } from "react";
import useWindowDimensions from "@/utils/useWindowDemensions";
import styles from "@/css/staff-carousel.module.css";
import Image from "next/image";
import { staffArray } from "@/data/staffData";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import Link from "next/link";

const getNumPerGroup = (width: number) => {
  switch (true) {
    case width > 980:
      return width * 0.6;
    case width > 1450:
      return 800;
    default:
      return width;
  }
};

const carouselSettings = {
  slidesToShow: 4,
  dots: false,
  infinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const StaffCarousel = () => {
  const { width } = useWindowDimensions();
  const ref = useRef<CarouselRef>(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 600,
          backgroundColor: "white",
        }}
      >
        <span
          style={{
            width: 100,
            height: 100,
            border: `5px solid black`,
            borderBottomColor: "white",
          }}
          className="loader"
        ></span>
      </div>
    );
  }

  return (
    <div className={styles["staff-section-wrapper"]}>
      <h3 className={styles["staff-section-header"]}>Meet The Team</h3>
      <div className={styles["staff-container"]}>
        <div className={styles["carousel-headers-container"]}>
          <p className={styles["staff-carousel-header"]}>
            Professionals Providing{" "}
            <strong
              style={{
                color: "#001a5",
              }}
            >
              Excellence
            </strong>
          </p>

          <p className={styles["staff-carousel-subheader"]}>
            At our company, our team is comprised of individuals who bring a
            wealth of expertise, creativity, and personalization to every
            project. Get to know the faces behind the innovation as we introduce
            you to the incredible people shaping the success of our company.
          </p>
        </div>
        <Carousel
          ref={ref}
          style={{
            maxWidth: getNumPerGroup(width),
            // paddingLeft: 20,
          }}
          {...carouselSettings}
        >
          {staffArray.map(({ name, title, image }, index) => (
            <Link key={index} href={`/staff/${name.replace(" ", "-")}`}>
              <div className={styles["staff-card"]}>
                <div className={styles["overlay-container"]}></div>
                <Image
                  src={image}
                  width={50}
                  height={50}
                  // layout="fill"
                  // objectFit={"conver"}
                  alt={"profile-pic"}
                  className={styles["profile-pic"]}
                />
                <div className={styles["staff-content-container"]}>
                  <p className={styles["staff-name"]}>{name}</p>
                  <p className={styles["staff-title"]}>{title}</p>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            gap: 14,
          }}
        >
          <Image
            onClick={() => {
              ref.current?.prev();
            }}
            className={styles["carousel-prev-button"]}
            src={
              "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705752945/icons/5_mvelzq.svg"
            }
            style={{
              transform: "rotate(180deg)",
            }}
            width={35}
            height={35}
            alt={"arrow"}
          />
          <Image
            onClick={() => {
              ref.current?.next();
            }}
            className={styles["carousel-next-button"]}
            src={
              "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705752945/icons/5_mvelzq.svg"
            }
            width={35}
            height={35}
            alt={"arrow"}
          />
        </div>
      </div>
      <Image
        src={
          "https://res.cloudinary.com/dzqp0dnia/image/upload/v1706091238/cloud-background_dy3svh.png"
        }
        className={styles["cloud-image"]}
        width={650}
        height={650}
        alt=""
      />
    </div>
  );
};

export default StaffCarousel;
