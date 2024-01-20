"use client";
import React, { useState } from "react";
import PageWrapper from "@/components/wrappers/PageWrapper";
import Image from "next/image";
import styles from "@/css/contact.module.css";
import { sendMail } from "@/utils/sendmail";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    company: "",
  });
  const [displayMsg, setDisplayMsg] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission (you can add your logic here)
    sendMail(formData);
    // Clear the form fields after submission
    setDisplayMsg(true);
    setFormData({ name: "", email: "", message: "", phone: "", company: "" });
  };

  return (
    <PageWrapper
      style={{
        background: "radial-gradient(#3ea8e4, #a8b5cd)",
      }}
    >
      <div className={styles["content-wrapper"]}>
        <div className={styles["contact-text-container"]}>
          <span className={styles["help-message"]}>LET US HELP YOU</span>
          <h1 className={styles["heading"]}>
            Connect with{" "}
            <strong className={styles["highlight-text"]}> an expert</strong>
          </h1>
          <p className={styles["contact-paragraph"]}>
            You're just a few clicks away from securing a complimentary
            consultation. Provide your details, and you can expect to hear from
            us within the next 24 hours.
          </p>
          <ul className={styles["contact-info"]}>
            <li className={styles["contact-info-item"]}>
              <a href="tel:404-919-0859" rel="nofollow">
                <img
                  src={
                    "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705763417/icons/phone-contact-icon_thufi7.svg"
                  }
                  width={30}
                  height={30}
                  alt={"phone-contact-link"}
                />
                <span>(404) 919-0859</span>
              </a>
            </li>
            <li className={styles["contact-info-item"]}>
              <a href="mailto:info@cyberdatapros.com">
                <img
                  src={
                    "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705763442/icons/email-contact-icon_czxajm.svg"
                  }
                  alt={"email-contact-link"}
                  width={30}
                  height={30}
                  rel="nofollow"
                />
                <span>info@cyberdatapros.com</span>
              </a>
            </li>
            <li className={styles["contact-info-item"]}>
              <a>
                <Image
                  src={
                    "https://res.cloudinary.com/dzqp0dnia/image/upload/v1705763461/icons/location-contact-icon_kwjuf3.svg"
                  }
                  alt={"location-contact-link"}
                  width={30}
                  height={30}
                  rel="nofollow"
                />
                <span>
                  280 Interstate North Circle Suite 200 Atlanta, GA 30339
                </span>
              </a>
            </li>
          </ul>
        </div>

        <form className={styles["contact-form"]} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
          <div
            style={{
              maxWidth: 550,
              display: "flex",
              gap: 20,
            }}
          >
            <div
              style={{
                flex: 1,
              }}
            >
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  marginTop: 10,
                }}
              />
            </div>
            <div
              style={{
                flex: 1,
              }}
            >
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: "100%",
                  marginTop: 10,
                }}
              />
            </div>
          </div>
          <label>Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className={styles["submit-button"]} type="submit">
            lets's get started
          </button>
          {displayMsg && (
            <p
              style={{
                marginTop: 12,
              }}
            >
              Thank you for reaching out - We will be in touch
            </p>
          )}
        </form>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
