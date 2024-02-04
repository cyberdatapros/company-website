import React from "react";
import styles from "@/css/staff-profile-page.module.css";
import { staffArray } from "@/data/staffData";
import Image from "next/image";
import PageWrapper from "../../wrappers/PageWrapper";
import Link from "next/link";

const transformCerts = (certs: string[]) => {
  const clength = certs.length;
  switch (true) {
    case clength > 3 && clength < 5:
      return [...certs, ...certs, ...certs, ...certs];
    case clength > 5 && clength < 8:
      return [...certs, ...certs, ...certs];
    case clength > 15:
      return certs;
    default:
      return certs;
  }
};

const CertsCarousel = ({ certs }: { certs: string[] }) => {
  const transFormedCerts = transformCerts(certs);

  return (
    <div className={styles["compliance-slider"]}>
      <div
        style={{
          animation: certs.length > 3 ? "" : "none",
          width: certs.length > 3 ? "calc(100px * 6)" : "auto",
        }}
        className={styles["compliance-slide-track"]}
      >
        {transFormedCerts.map((imageUrl, index) => (
          <div key={index} className={styles["compliance-slide-item"]}>
            <img src={imageUrl} width={100} height={100} alt={`certs badge`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const StaffProfilePage = ({ name }: { name: string }) => {
  const staffMember = staffArray.find(
    (staff) => staff.name === name.replace("-", " ")
  );

  if (!staffMember) return;

  return (
    <PageWrapper
      style={{
        backgroundColor: "whitesmoke",
      }}
    >
      <div className={styles["profile-page"]}>
        <div className={styles["profile-details-container"]}>
          <div className={styles["profile-image"]}>
            <Image src={staffMember.image} alt={""} width={50} height={50} />
          </div>
          <h1 className={styles["profile-name"]}>{staffMember.name}</h1>
          <span>{staffMember.title}</span>
          <div className={styles["social-container"]}>
            <Link href={staffMember.social}>
              {" "}
              <Image
                src={
                  "https://res.cloudinary.com/dzqp0dnia/image/upload/v1706088653/linkedin-social_hg7vb4.svg"
                }
                width={45}
                height={45}
                alt={""}
              />
            </Link>
          </div>
          {staffMember.certs.length > 0 && (
            <CertsCarousel certs={staffMember.certs} />
          )}
        </div>
        <div className={styles["content-container"]}>
          <div>
            <h2
              style={{
                marginBottom: 10,
                textTransform: "capitalize",
                fontSize: 20,
              }}
            >
              About {staffMember.name.split(" ")[0]}
            </h2>
            <p
              className={styles["profile-paragraph"]}
              dangerouslySetInnerHTML={{ __html: staffMember.bio }}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StaffProfilePage;
