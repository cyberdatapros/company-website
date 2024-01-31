"use client";
import React from "react";
import CarouselWrapper from "../wrappers/CarouselWrapper";
import feedbackArray from "@/data/feedback";
import styles from "@/css/feedback.module.css";
import useWindowDimensions from "@/utils/useWindowDemensions";

const FeedbackCard = ({
  text,
  name,
  title,
}: {
  text: string;
  name: string;
  title: string;
}) => {
  return (
    <div className={styles["feedback-item"]}>
      <p className={styles["feedback-text"]}>{text}</p>
      <p className={styles["feedback-client-name"]}>{name}</p>
      <p className={styles["feedback-client-title"]}>{title}</p>
    </div>
  );
};

const FeedbackCarousel = () => {
  const { width } = useWindowDimensions();
  return (
    <CarouselWrapper
      header="Client Feedback"
      subheader="What our happy clients say"
      maxWidth={width > 980 ? 900 : 450}
      style={{
        backgroundColor: "#11131F",
        borderTop: "5px solid #b58500",
        borderBottom: "5px solid #b58500",
        height: 561,
      }}
      settings={{
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
      }}
    >
      {feedbackArray.map(({ feedbacktext, clientname, clienttitle }, index) => (
        <FeedbackCard
          key={index}
          text={feedbacktext}
          name={clientname}
          title={clienttitle}
        />
      ))}
    </CarouselWrapper>
  );
};

export default FeedbackCarousel;
