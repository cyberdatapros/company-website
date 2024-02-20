import { info } from "console";
import { ServicePageType } from "./servicesPageData";

export const cyberSecurityData: ServicePageType = {
  description: `<p>Our range of services is crafted to strengthen your website's defenses against cyber threats. Our mission is simple: strengthen your defenses against an array of cyber threats happening daily. We've tailored our solutions to suit your specific unique needs.</p><p><br></p><p>Whether you're running a small business or a large enterprise, our dedicated team is here to offer comprehensive solutions, ensuring the protection of your organization.</p><p><br></p><p>Our experts collaborate closely with you to teach you the world of cybersecurity. We're more than just a service provider; we're your trusted partner.&nbsp;</p><p>Let's collaborate to build a strong defense against cyber threats and maintain the integrity of your online presence.</p>`,
  segments: [
    {
      title: "Virtual Chief Information <span>Security Officer</span> (vCISO)",
      url: "vciso",
      badgeImageUrl:
        "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707247602/service-segment-badges/vciso-service.svg",
      shortHand: "vCISO",
      headLine: `Our experts have served in a broad range of industries for companies of various sizes and know how to align security strategies with your company’s challenges.`,
      textBlock: `<p>Your vCISO plays a critical role in IT security strategy design, implementation, assessment, and mitigation of potential cyber-security risks.&nbsp;</p><p><br></p><p>Organizations can take advantage of this opportunity to utilize external expertise instead of maintaining a full-time, in-house position. As the expert in the latest cybersecurity and data privacy practices, responsibilities encompass staff training, leading client calls, conducting ongoing security and privacy audits to minimize gaps, and reviewing security questionnaires, client contracts, vendor paperwork, and other necessary documentation for business operations.</p>`,
      dropDownItems: [
        {
          title: "Discovery and Integration",
          info: `Identify project stakeholders and key contacts, develop and define a communication plan, and establish a comprehensive understanding of infrastructure, systems, processes, etc., through initial interviews and documentation review. Additionally, articulate and define the criteria for success in the role.`,
        },
        {
          title: "Initial Assessment",
          info: `Review all available information to identify security and privacy compliance gaps and assess overall maturity and develop and prioritize cybersecurity strategy and initiatives based on identified gaps.`,
        },
        {
          title: "Remediation and Improvements",
          info: `Next, revise existing information security and data privacy policies and procedures, develop and provide additional information security and data privacy policies and documentation. Then partner with internal and external parties to follow through on remediation tasks and projects`,
        },
        {
          title: "Ongoing tasks and responsibilities",
          info: "Collaborating closely with internal teams, serve as the internal subject matter expert on regulations and frameworks, including GDPR, CPRA, ISO, SOC, NIST, etc. Additionally, continually monitor and evaluate both internal and external risk management, collaborate with third parties to align technical, administrative, and physical security controls, and provide assistance in negotiating and aligning contracts with the business's information security and privacy requirements.",
        },
      ],
    },
    {
      title: "Security <span>Audits</span>",
      url: "security-audits",
      badgeImageUrl:
        "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707247602/service-segment-badges/secuirty-audits.svg",
      headLine:
        "Being fully compliant with data security regulations depends on your industry. It also depends on the types of sensitive data you're collecting and how that data is being handled.  The best way to handle incidents is to take measures to avoid them entirely, and these measures are directed by audits.",
      textBlock: `<p>The best way to prevent security incidents is through proactive measures guided by audits. Understanding the specific types of sensitive information your organization deals with is crucial. By conducting thorough audits, you can identify and address vulnerabilities, bolstering your overall security stance. These audits act as a proactive tool, offering insights to tackle security concerns before they become major issues.</p><p><br></p><p>Securing compliance with data security regulations involves a unique approach, taking into account the requirements of your industry and the nuances of handling sensitive data within your organization. The effectiveness of your security measures is closely tied to a comprehensive understanding of the types of sensitive information you deal with. To proactively manage potential security risks, conducting regular audits becomes a key practice.</p><p><br></p><p>Audits serve as a proactive checkpoint, allowing you to pinpoint vulnerabilities, assess your security standing, and implement preventive strategies. By delving into the specifics of your data processes through these audits, you empower your team to address and mitigate potential security threats before they escalate, fostering a resilient and secure environment for your organization.</p>`,
      dropDownItems: [
        {
          title: "Audit",
          info: "A single audit might not always detect all risks present – some issues only become apparent in trends between multiple audits. A continual audit process ensures that most every detectable risk present in a system is identified, not just those apparent at a single point in time.",
        },
        {
          title: "Remediation",
          info: "Next is addressing the identified risks. A common issue with said process is that the remediation efforts are not always fully effective, leaving the organization exposed still to a risk they believe is mitigated. Subsequent audits will review remediation efforts to assess their efficacy and provide guidance on how to improve them. ",
        },

        {
          title: "Compliance",
          info: "More frequent audits mean less room exists in-between for organizations to unknowingly diverge from emerging regulations and best practices. This not only simplifies the maintenance of compliance by way of lending more time to react to and prepare for new requirements, but also lends a competitive edge by allowing for quick adoption of new security and privacy best practices.",
        },

        {
          title: "Value",
          info: "Externally it’s often found that potential partners or clients only accept audits from the last year or six months, with more recency generally preferred. Internally, timely findings in developing systems are oftentimes extremely beneficial, as it’s far easier to adjust for security early in that system’s implementation than attempting to retrofit it far afterward.",
        },
      ],
    },
    {
      title: "Penetration <span>Testing</span>",
      url: "penetration-testing",
      badgeImageUrl:
        "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707247603/service-segment-badges/pen-testing-service.svg",
      headLine: `Penetration testing, often referred to as ethical hacking, is a manual approach by attempting to actively exploit any weaknesses that exist, in order to simulate what damage could be done by a real attacker. CyberData Pros has a very thorough approach to identifying exploits and weaknesses within the network, application, or business.`,
      textBlock: `The goal of a penetration test is to think like the “bad guys”, they are significantly more detailed and thus require substantially more time and effort. Because of the thorough and in-depth nature, a penetration test takes days to weeks to complete. Naturally, the cost associated with a penetration test is higher than a vulnerability scan, but it’s worth noting that a retest is frequently included in the cost. Additionally, they do not need to be conducted as frequently as vulnerability scanning; annually is the most common interval Reconnaissance`,
      dropDownItems: [
        {
          title: "Enumeration",
          info: "Enumeration is a crucial phase in penetration testing where the tester actively gathers information about the target network, systems, and services. The goal is to identify and extract valuable data that can be used in subsequent phases, such as vulnerability analysis and exploitation.",
        },

        {
          title: "Vulnerability Analysis",
          info: "After completing the reconnaissance phase, the next step is vulnerability analysis. This involves a thorough examination of the identified systems and applications to pinpoint vulnerabilities that could be exploited by attackers. The goal is to assess the weaknesses in the security posture of the target.",
        },
        {
          title: "Exploitation",
          info: "Once vulnerabilities are identified and prioritized, the penetration tester moves on to the exploitation phase. This involves attempting to exploit the vulnerabilities to simulate how a real attacker might compromise the system.",
        },
        {
          title: "Reporting",
          info: "The final phase of penetration testing involves documenting and communicating the findings to the relevant stakeholders. A comprehensive and well-structured report is crucial for understanding the security posture and making informed decisions for remediation.",
        },
      ],
    },
    {
      title: "Vulnerability <span>Scanning</span>",
      url: "vulnerability-scan",
      badgeImageUrl:
        "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707247604/service-segment-badges/vulnerability-scan-service.svg",
      headLine:
        "CyberData Pros uses our unique tool set to discover vulnerabilities within your network or application. Once we discover and document our findings, our team of certified experts will work with you to correct each vulnerability and make your business more secure.",
      textBlock: `<p>Vulnerability scanning is a vital process that utilizes automated tools to uncover and identify known vulnerabilities across an organization's devices, systems, and networks. This systematic approach actively seeks out potential weaknesses, allowing for the timely detection and remediation of security risks. Regular vulnerability scanning is a fundamental practice to ensure the security and stability of your organization's systems, reducing the chances of exploitation by malicious entities.</p><p><br></p><p>Regularly incorporating vulnerability scanning into your security practices is a foundational step to upholding the integrity of your organization's systems, diminishing the risk of exploitation by malicious entities. By systematically identifying vulnerabilities, you empower your team to proactively address and enhance the security posture of your digital infrastructure.</p>`,
      dropDownItems: [
        {
          title: "Planning and Scope Definition",
          info: "The vulnerability scanning process begins with planning and defining the scope, where specific systems, networks, or applications are outlined for assessment. A regular scanning schedule is established, and the desired level of detail for the scan reports is determined.",
        },
        {
          title: "Asset Identification and Network Discovery",
          info: "Asset identification follows, involving the compilation of an inventory that encompasses devices, systems, networks, and applications within the defined scope. Simultaneously, scanning tools are employed to map the organization's network, discovering devices and their interconnections.",
        },
        {
          title: "Vulnerability Detection and Analysis",
          info: "Vulnerability detection is a critical step, utilizing automated scanning tools to identify known vulnerabilities in the targeted assets. This involves comparing system configurations and software versions against a database of known vulnerabilities. The subsequent analysis of scan results prioritizes vulnerabilities based on severity, potential impact, exportability, and the criticality of affected systems.",
        },
        {
          title: "Reporting and Remediation Planning",
          info: "The reporting and remediation planning phase generates comprehensive reports that detail identified vulnerabilities, their risk levels, and recommended remediation steps. A remediation plan is then developed, outlining steps to address and mitigate the identified vulnerabilities while prioritizing efforts based on severity and potential impact.",
        },
        {
          title: "Implementation of fixes, rescanning, and Documentation",
          info: "The final steps involve implementing fixes, where the remediation plan is executed through the application of patches, updates, or configuration changes to eliminate or mitigate vulnerabilities. Follow-up rescans are conducted to verify the successful remediation of vulnerabilities, ensuring ongoing security. Throughout the entire process, meticulous documentation is maintained, encompassing reports, remediation actions, and any changes made to enhance security.",
        },
      ],
    },
    {
      title: "Risk <span>Assessments</span>",
      url: "risk-assessments",
      badgeImageUrl:
        "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707247605/service-segment-badges/risk-assessments-service.svg",
      headLine: `While risk assessments are phenomenal for newer businesses just getting started on building their cybersecurity infrastructure, they are also incredibly important for established security teams as well. CyberData Pros conducts regular risk assessments, allowing your company to track progress, quantify improvements made, and continue to identify new opportunities for improvement as you change and grow. 
`,
      textBlock: `<p>Do you need that expensive IPS your IT manager asked for? Regular risk assessments allow your company to track progress, quantify improvements made, and continue to identify new opportunities for improvement as you change and grow.&nbsp;</p><p><br></p><p>This ensures that as new clients join, or new services are offered, you can maintain a comfortable footing within your risk management structure, as well as a potential competitive advantage over others in your space.&nbsp;</p><p><br></p><p>As the data privacy and security requirements for the biggest companies in the world continue to grow, due diligence and proactive tactics that show your organization is committed to handling their data responsibly and securely can make all the difference when they are deciding who gets that next big contract.</p>`,
      dropDownItems: [
        {
          title: "Scope Definition and Asset Identification",
          info: `In conducting a risk assessment, the initial step involves clearly defining the scope of the assessment, and specifying the systems, processes, or assets to be evaluated. Simultaneously, a comprehensive inventory is compiled, encompassing hardware, software, data, personnel, and other resources within the identified scope`,
        },
        {
          title: "Threat and Risk Analysis",
          info: `Following this, the assessment delves into the identification of potential threats and vulnerabilities that could impact the assets in question. The subsequent evaluation assesses the likelihood and potential impact of each identified threat, considering the existing vulnerabilities and the efficacy of current security controls.`,
        },
        {
          title: "Risk Evaluation and Mitigation Planning",
          info: `Upon completing the risk analysis, the next critical phase is the assignment of a risk level to each identified threat, taking into account factors such as likelihood, impact, and the effectiveness of current controls. Concurrently, strategies and action plans are developed to mitigate or manage the identified risks, with prioritization based on their severity.`,
        },
        {
          title: "Implementation of Controls and Monitoring",
          info: `The implementation of security controls is the subsequent step, involving the application of measures to mitigate or reduce the identified risks. This may include technological enhancements, policy updates, or other appropriate means. To ensure ongoing effectiveness, regular monitoring of implemented controls and periodic reviews of the risk landscape are conducted to identify any changes that may impact the organization's risk profile. Throughout the entire process, meticulous documentation is maintained, encompassing the identified risks, mitigation strategies, and any changes made to the security posture.`,
        },
      ],
    },
    {
      title: "Tabletop <span>Exercises</span>",
      url: "tabletop-exercises",
      badgeImageUrl:
        "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707247606/service-segment-badges/tabletop-service.svg",
      headLine: `CyberData Pros always custom design each tabletop exercise for our clients and make sure we also throw in some fun! We take extra time to understand your business and how the tabletop exercise can provide benefits to your organization.`,
      textBlock: `<p>A tabletop exercise is an informal, discussion-based session in which a team discusses their roles and responses during an emergency, walking through one or more example scenarios. The atmosphere is collegial and exploratory and is not meant to put participants in the mindset they’d have during a disaster. Tabletop exercises are used to prepare for all sorts of crises, but cybersecurity and disaster recovery are common areas of focus.</p><p>Tabletop exercises are designed to expose weaknesses in organizational structures and to make sure that people follow protocols and best practices. After all, the best-laid plans often fall apart when real-world humans have to implement them. While there are plenty of ways to test the technical aspects, a tabletop exercise tests the human and organizational factors that are just as important for cybersecurity.</p><p><br></p><p>Let CyberData Pros custom design and execute a tabletop exercise for your business today!</p>`,
      dropDownItems: [
        {
          title: "Design",
          info: `Each exercise is designed for your business and stakeholders. We customize the entire process, as well as clarify the objectives and outcomes with the entire audience. `,
        },
        {
          title: "Engage",
          info: `We create an interactive and encouraging space for people to ask questions and make mistakes. Our certified consultants will ask probing questions, throw in roadblocks, and make sure everyone stays on track.`,
        },
        {
          title: "Learn",
          info: `The ultimate goal of a tabletop exercise is to learn and understand what you don't know. We will prepare outcomes and next steps for your business to ensure you know what to do next.`,
        },
      ],
    },
  ],
};
