"use client";
import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: "#F2F5F7",
        // height: 50,
        padding: 20,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 20,
        // position: "fixed",
      }}
    >
      <span
        style={{
          fontSize: 16,
        }}
      >
        This website uses cookies to improve user experience. By using our
        website you consent to all cookies in accordance with our Cookie Policy.
      </span>
      <button
        style={{
          border: "none",
          backgroundColor: "#21C55D",
          padding: "5px 10px",
          borderRadius: 5,
          fontSize: 18,
          color: "white",
          width: "max-content",
        }}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
