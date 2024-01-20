type ServiceType = {
  title: string;
  description: string;
};

const servicesArray: Array<ServiceType> = [
  {
    title: "cybersecurity",
    description:
      "We work to provide a process framework for your organization’s information security management system to ensure your data is better managed in transit and at rest.",
  },
  {
    title: "privacy",
    description: `We understand the critical importance of privacy in today's digital landscape. We are committed to equipping individuals and organizations with the necessary tools and insights to defend against cyber threats while respecting privacy rights.`,
  },
  {
    title: "compliance",
    description:
      "There are a lot of letters and acronyms involved with modern data security. We’ll help you navigate the alphabet soup of twenty-first century compliance requirements.",
  },
  {
    title: "consulting",
    description:
      "Need to update your privacy policy? How about your terms of service? With us, creating and updating your privacy and data security documentation is easier than ever.",
  },
];

export default servicesArray;
