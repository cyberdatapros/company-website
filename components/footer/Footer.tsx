"use client";
import React, { useState } from "react";
import styles from "../../css/footer.module.css";
import Image from "next/image";
import { servicesData, ServicesType } from "@/data/servicesPageData";
import Link from "next/link";
import { socialIcons } from "@/data/socialsData";

type ServiceKeyType = keyof ServicesType;

const services = Object.keys(servicesData) as Array<ServiceKeyType>;

const ServiceLinksCollection = ({
  serviceTitle,
}: {
  serviceTitle: ServiceKeyType;
}) => {
  const serviceItemsList = servicesData[serviceTitle].segments;

  return (
    <div className={styles["list-wrapper"]}>
      <Link
        href={`/services/${serviceTitle}`}
        className={styles["list-header"]}
      >
        {serviceTitle}
      </Link>
      <ul className={styles["list"]}>
        {serviceItemsList.map((item) => {
          const { title, url, shortHand } = item;
          return (
            <li key={title} className={styles["list-item"]}>
              <Link
                href={`/services/${serviceTitle}/${url}`}
                dangerouslySetInnerHTML={{ __html: shortHand || title }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className={styles["footer-wrapper"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["list-wrapper"]}>
          <Image
            className={styles["logo"]}
            src={
              "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705754252/cdp-logo-dark_bbikgh.svg"
            }
            alt={"company logo"}
            width={250}
            height={125}
          />
          <p
            style={{
              color: "#84878b",
              marginTop: 50,
              marginBottom: 20,
              textAlign: "left",
              fontSize: 18,
            }}
          >
            Data Privacy and & Secuirty Made Simple
          </p>
          <div className={styles["social-icons"]}>
            {socialIcons.map(({ url, image }, index) => (
              <Link
                key={index}
                rel="nofollow"
                style={{
                  marginRight: 10,
                }}
                href={url}
              >
                <Image
                  src={`${image}`}
                  alt={"company logo"}
                  width={35}
                  height={35}
                />
              </Link>
            ))}
          </div>
          <Link
            style={{
              color: "#84878b",
              marginTop: 20,
              textAlign: "left",
              fontSize: 16,
            }}
            href={"/privacy-policy"}
          >
            {" "}
            Privacy Policy
          </Link>
        </div>
        {services.map((service) => (
          <ServiceLinksCollection key={service} serviceTitle={service} />
        ))}
      </div>
      <p
        style={{
          fontSize: 14,
          color: "#84878b",
        }}
      >
        &copy; 2024 CyberData Pros. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
