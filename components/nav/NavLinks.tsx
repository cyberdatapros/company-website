import { ServicesType, servicesData } from "@/data/servicesPageData";
import { MenuProps } from "antd";
import Link from "next/link";

export type MenuItem = Required<MenuProps>["items"][number];

export const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode | null,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const getServiceItemLinks = (service: keyof ServicesType) => {
  const Links = servicesData[service].segments.map((key) => {
    const { title, url, shortHand } = key;
    return getItem(
      <Link
        href={`/services/${service}/${url}`}
        dangerouslySetInnerHTML={{ __html: shortHand || title }}
      />,
      `${url}-${title}`,
      <></>
    );
  });
  return Links;
};

const links: MenuItem[] = [
  getItem(
    <Link href={"/"} style={{}}>
      Home
    </Link>,
    "hme",
    <></>
  ),
  getItem("Services", "services", <></>, [
    getItem(
      "Cybersecurity",
      "cyber-header",
      <></>,
      getServiceItemLinks("cybersecurity")
    ),
    getItem("Privacy", "privacy-header", <></>, getServiceItemLinks("privacy")),
    getItem(
      "Compliance",
      "compliance-header",
      <></>,
      getServiceItemLinks("compliance")
    ),
    getItem(
      "Consulting",
      "consulting-header",
      <></>,
      getServiceItemLinks("consulting")
    ),
  ]),
  getItem("Resources", "resources", <></>, [
    getItem(<Link href={`/blogs`}>Blogs</Link>, "bgs", <></>),
  ]),
  getItem(
    <a
      href="/contact"
      style={{
        backgroundColor: "#0886D6",
        padding: "5px 20px",
        color: "white",
        borderRadius: "5px",
      }}
    >
      Contact
    </a>,
    "contact",
    <></>
  ),
];

export default links;
