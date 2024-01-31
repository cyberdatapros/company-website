import { privacyData } from "./privacyData";
import { cyberSecurityData } from "./cyberSecurityData";
import { complianceData } from "./complianceData";
import { consultingData } from "./consultingData";

export type ServicePageType = {
  description: string;
  segments: Array<{
    title: string;
    url: string;
    shortHand?: string;
    headLine: string;
    badgeImageUrl: string;
    textBlock: string;
    dropDownItems: Array<{ title: string; info: string }>;
  }>;
};

export type ServicesType = {
  cybersecurity: ServicePageType;
  privacy: ServicePageType;
  compliance: ServicePageType;
  consulting: ServicePageType;
};

export const servicesData: ServicesType = {
  cybersecurity: cyberSecurityData,
  privacy: privacyData,
  compliance: complianceData,
  consulting: consultingData,
};
