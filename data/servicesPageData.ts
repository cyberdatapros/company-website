export type ServicePageType = {
  description: string;
  segments: Array<{
    title: string;
    url: string;
    shortHand?: string;
    headLine: string;
    badgeImageUrl: string;
    subheader: string;
    textBlock1: string;
    textBlock2?: string;
    dropDownItems: {
      [key: string]: string;
    };
  }>;
};

export type ServicesType = {
  cybersecurity: ServicePageType;
  privacy: ServicePageType;
  compliance: ServicePageType;
  consulting: ServicePageType;
};

export const servicesData: ServicesType = {
  cybersecurity: {
    description: `<p>Information or data security refers to the processes and tools used to protect sensitive business information from disruption, modification, destruction, and inspection.</p><p>Data is more important to more businesses and industries than ever before. As the business world moved online and into the cloud, you’ve become responsible for safeguarding your clients’ and customers’ private information. If you’re working in a specialized industry like healthcare or banking, chances are you need to meet additional HIPAA or PCI compliance standards. It’s a lot to navigate, and we’re here to help.</p><p><br></p><h5>Outsourced CISO / Outsourced CPO</h5><p>Staffing a Chief Information Security Officer (CISO) or Chief Privacy Officer (CPO) is a big, expensive decision for your business, especially if you’re not sure of the need for a full time resource yet. Outsourcing your CISO and CPO needs with CyberData Pros will give you an experienced hand to identify and mitigate all potential security risks while building out information security best practices for your organization.</p><p><br></p><p>Your CISO or CPO plays a critical role in IT security strategy design, implementation, assessment, and mitigation of potential cyber-security risks. We wish we didn’t work in a world where your organization needs CISO and CPO services, but we do, and we’d love to discuss how CyberData Pros can help bring your Information Security operation to the next level.</p><p><br></p>`,
    segments: [
      {
        title:
          "Virtual Chief Information <span>Security Officer</span> (vCISO)",
        url: "vciso",
        badgeImageUrl: "",
        shortHand: "VCISO",
        headLine: `When your company needs a boost in information and network security leadership, count on CyberData Pros. Our virtual CISOs (vCISOs) bring years of hands-on experience. We have the know-how to enhance your cybersecurity program and the flexibility to assist or take the lead in strategic security planning. We're here to be your reliable partner in strengthening your organization's security.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {
          planning: "",
          "current state assessment": "",
          "remediation road map": "",
          "program implementation": "",
          "continuious improvement on ongoing maintenance": "",
        },
      },
      {
        title: "Security <span>Audits</span>",
        url: "security-audits",
        badgeImageUrl: "",
        headLine: `Being fully compliant with data security regulations depends on your industry. It also depends on the types of sensitive data you’re collecting and how that data is being handled. CyberData Pros will document, audit, and communicate findings with your business to help disclose any security gaps. We have built out a unique service offering that allows us to perform automated audits without disrupting your business!`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "Penetration <span>Testing</span>",
        url: "penetration-testing",
        badgeImageUrl: "",
        headLine: `Penetration testing, often referred to as ethical hacking, is a manual approach by attempting to actively exploit any weaknesses that exist, in order to simulate what damage could be done by a real attacker. CyberData Pros has a very thorough approach to identifying exploits and weaknesses within the network, application, or business`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "Vulnerability <span>Scanning</span>",
        url: "vulnerability-scan",
        badgeImageUrl: "",
        headLine: `Vulnerability scanning is a process that uses automated tools to search for and identify known vulnerabilities across an organization’s devices, systems, and networks. CyberData Pros uses our unique toolset to discover vulnerabilities within your network or application. Once we discover and document our findings, our team of certified experts will work with you to correct each vulnerability and make your business more secure.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "Risk <span>Assessments</span>",
        url: "risk-assesments",
        badgeImageUrl: "",
        headLine: `While risk assessments are phenomenal for newer businesses just getting started on building their cybersecurity infrastructure, they are also incredibly important for established security teams as well. We conduct regular risk assessments, allowing your company to track progress, quantify improvements made, and continue to identify new opportunities for improvement as you change and grow.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "Tabletop <span>Excercises</span>",
        url: "tabletop-exercises",
        badgeImageUrl: "",
        headLine: `We custom design each tabletop exercise for our clients and make sure we also throw in some fun! We take extra time to understand your business and how the tabletop exercise can provide benefits to your organization.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
    ],
  },
  privacy: {
    description:
      "<p>We provide a comprehensive overview of all key areas of your technology operations including applications, infrastructure, vendors, software licenses, hardware, procedures, and more. Our team of industry professionals will leave no stone unturned to create valuable and exhaustive documentation of your IT and cybersecurity architecture. Once the discovery and investigation process has concluded, you will receive a complete report with the gaps, risks, and details. Our Due Diligence offering provides you and your business the ability to fully understand the best path of buying or selling a company.</p><p><br></p><p>CyberData Pros has experience in IT, cybersecurity, and data privacy. This is essential to better understanding the complex compliance and regulatory frameworks that could impact your business. Having expertise in all areas of data privacy and security helps to make sure you receive a complete due diligence review of all systems. We have provided these types of due diligence services for years and know where to look!</p><p><br></p>",
    segments: [
      {
        title: "Privacy <span>Impact</span> Assessments",
        url: "privacy-impact-assessments",
        badgeImageUrl: "",
        headLine: `Explore the benefits of our Privacy Impact Assessment service, a powerful tool designed to help organizations identify, categorize, and address privacy risks within their data systems in alignment with applicable legislative standards. Our assessments aim to verify privacy compliance with organizational and legal requirements, identify existing privacy risks, and propose effective solutions for risk mitigation.
`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "Privacy <span>Policies</span>",
        url: "privacy-policies",
        badgeImageUrl: "",
        headLine: `A privacy policy should be specifically crafted for your company. CyberData Pros has worked with hundreds of clients to help generate these policies. Let us customize a Privacy Policy that fits your business.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "Cookie <span>Compliance</span>",
        url: "cookie-compliance",
        badgeImageUrl: "",
        headLine: `Maintaining cookie compliance is vital for businesses to respect user privacy and meet regulatory standards. CyberData Pros specializes in providing practical guidance, helping businesses implement clear and user-friendly cookie policies. Our expertise minimizes legal risks and establishes trust with customers.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
    ],
  },
  compliance: {
    description:
      "<p>As the world shifts to one that is increasingly digital and data-driven, the need to protect your data is greater than ever before. Thankfully, there are compliance standards to help you know exactly what needs to be done. A simple incidence of noncompliance has never been more costly to your reputation and balance sheet, and we’re here to help make sure that doesn’t happen.</p><p><br></p><p>Being fully compliant with data security regulations depends on your industry. It also depends on the types of sensitive data you’re collecting and how that data is being handled.</p><p>Being compliant means your business will need to implement a series of data management systems that provide security and protection at the data level. This is typically known as information security management systems (ISMS).</p><p><br></p><p>ISO 27001 is the most widely recognized data security standard for businesses, and we have lots of experience dealing with ISO compliance. Being compliant with ISO 27001 shows potential customers and clients that you’re a safe group to do business with. More importantly, you’ll have the certification to prove it.</p><p><br></p>",
    segments: [
      {
        title: "ISO <span>27001</span>",
        url: "iso-27001",
        badgeImageUrl: "",
        headLine: `CyberData Pros has successfully helped businesses – some of whom had not even started their compliance journey – achieve certification. We have a 100% audit success rate with all of our clients. Demonstrate That Your Business Takes Cybersecurity and Data Privacy Seriously.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "ISO <span>27701</span>",
        url: "iso-27701",
        badgeImageUrl: "",
        headLine: `CyberData Pros has a 100% audit success rate with all of our clients. Demonstrate That Your Business Takes Cybersecurity and Data Privacy Seriously. This service focuses on implementing and managing a Privacy Information Management System (PIMS) to enhance privacy practices and protect personal information.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title:
          "Cybersecurity <span>Maturity</span> Model <span>Certification</span> (CMMC)",
        url: "cmmc",
        badgeImageUrl: "",
        shortHand: "CMMC",
        headLine: `Obtaining the (CMMC) certificate is crucial for businesses to secure sensitive information and comply with government contracts. At CyberData Pros, we specialize in guiding businesses through the CMMC certification process, ensuring they meet the necessary standards and secure sensitive data effectively.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title:
          "Health Insurance <span>Porability</span> and <span>Accountability</span> Act",
        url: "hipaa",
        badgeImageUrl: "",
        shortHand: "HIPAA",
        headLine: `HIPAA regulations are continuously evolving and penalties can be costly. CyberData Pros will review your processes, perform audits, and train your team to ensure your business complies with all HIPAA guidelines.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "System and <span>Organization</span> Controls",
        url: "soc",
        badgeImageUrl: "",
        headLine: `SOC reports are intended to increase customer confidence, trust and can differentiate your business from your competitors. CyberData Pros has prepared hundreds of clients to sit for their SOC Report.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
    ],
  },
  consulting: {
    description:
      "<p>There are multiple areas of your business to cover in order to ensure data privacy and security coverage. Many of these areas start with updated documentation. It is not only important to have this kind of documentation, but to fully abide by what is spelled out. This is where CyberData Pros makes the largest impact on your business. With our different consulting services, we can help make sure your business is safe and secure!</p><p><br></p><p>While information security documentation is essential to your data and operation, we’ve found that far too often the documentation is incomplete or even worse, totally missing. While this is tragic, it’s also entirely avoidable by teaming up with professionals who can walk you through the documentation process and make sure all your bases are covered.</p><p><br></p><p>Successful documentation not only makes data easily accessible, it also provides a variety of user entry points, assists new users in better understanding processes, and simplifies the product, all while helping trim support costs. Beyond this, the presence of documentation makes it easier to track all phases of an application, bringing in innovative ideas to help better your software product.</p><p><br></p>",
    segments: [
      {
        title: "Desaster Recovery",
        url: "desaster-recovery",
        badgeImageUrl: "",
        headLine: `Shield your business against unexpected setbacks with a Disaster Recovery Plan. We help you bounce back swiftly by protecting crucial systems and infrastructure, minimizing downtime.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "Business <span>Continuity</span> Plan",
        url: "business-continuity",
        badgeImageUrl: "",
        headLine: `Safeguard your operations with a Business Continuity Plan. Navigate disruptions seamlessly, ensuring your business remains resilient and functional during unforeseen challenges.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "Security <span>Questionnaires</span> ",
        url: "security-questionaires",
        badgeImageUrl: "",
        headLine: `We guide you through the process, making sure your business meets top-notch security standards, fostering trust among your stakeholders.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "Policy <span>Documents</span> ",
        url: "policy-documents",
        badgeImageUrl: "",
        headLine: `Keeping your documentation current is essential so that critical pieces of the business are known to all. The worst thing that can happen is an employee walks out the door and nothing is documented. CyberData Pros will customize all of these policies to fit your business. Our certified consultants will work with your team to ensure you have the proper policies in place.`,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
      {
        title: "Cloud <span>Infrastructure</span> ",
        url: "cloud-infrastructure",
        badgeImageUrl: "",
        headLine: `As businesses continue to move more into the cloud, the associated risks keep growing and the costs keep climbing. CyberData Pros can help you maintain a clean, secure, and cost effective environment with our industry leading Cloud Infrastructure `,
        subheader: "",
        textBlock1: "",
        textBlock2: "",
        dropDownItems: {},
      },
    ],
  },
};
