"use client";
import CardWrapper from "@/components/wrappers/CardWrapper";
import PageWrapper from "@/components/wrappers/PageWrapper";
import React, { useState } from "react";
import Image from "next/image";
import style from "@/css/resources-page.module.css";

import css from "styled-jsx/css";
import ComplianceCarorusel from "@/components/dashboard/ComplianceCarousel";
import { send } from "process";
import { sendMail } from "@/utils/sendmail";

const resources = [
  {
    image:
      "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707439641/resources/top-10-to-do-img.png",
    link: "/soc2-audit-top-10-to-do-items.pdf",
  },
  {
    image:
      "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707439641/resources/how-to-risk-prepare-img.png",
    link: "/risk-assessment-with-confidence.pdf",
  },
  {
    image:
      "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707439641/resources/preparing-for-iso-27001.png",
    link: "/top-ten-tips-to-prepare-iso27001.pdf",
  },
  {
    image:
      "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707439641/resources/successful-security-walkthrough.png",
    link: "/key-questions-for-successful=walkthrough.pdf",
  },
  {
    image:
      "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707439641/resources/prepare-for-a-audit.png",
    link: "/7-essential-tips-to-prepare-for-security-audits.pdf",
  },
];

const Page = () => {
  const [emailSubmitted, setEmailSubmit] = useState(false);
  const [email, setEmail] = useState<string>("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    sendMail({
      email: email,
      message: `This is a download request from the the resources page by ${email}`,
    });

    setEmailSubmit(true);
  };

  return (
    <PageWrapper>
      <div className={style["wrapper"]}>
        <form className={style["form"]} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              marginTop: 10,
            }}
          />
          <button type="submit">Request to Download</button>
        </form>
        <CardWrapper
          style={{
            rowGap: 25,
          }}
        >
          {resources.map((i, index) => (
            <div className={style.card} key={index}>
              <Image
                src={i.image}
                width={300}
                height={300}
                alt="resource img"
              />
              {emailSubmitted && (
                <a href={i.link} download>
                  Download
                </a>
              )}
            </div>
          ))}
        </CardWrapper>
      </div>
      <ComplianceCarorusel />
    </PageWrapper>
  );
};

export default Page;
