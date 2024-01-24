import React from "react";
import styles from "@/css/staff-profile-page.module.css";
import { staffArray } from "@/data/staffData";
import Image from "next/image";
import PageWrapper from "../wrappers/PageWrapper";
import Link from "next/link";

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
