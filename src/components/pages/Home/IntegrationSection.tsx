import Button from "@/ui/Button";
import Image from "next/image";
import {
  IntegrationText,
  IntegrationHeading,
  IntegrationContainer,
  FrameContainer,
  CompanyName,
  CompanyText,
  IntegrationCardContainer,
  CompanyContainer,
  HelpButton,
} from "./styled";
const brands1 = [
  {
    title: "Google Suite",
    icon: "teams.png",
    text: "Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites",
  },
  {
    title: "Office 365",
    icon: "office.png",
    text: "Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites",
  },
  {
    title: "Google Suite",
    icon: "suite.png",
    text: "Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites",
  },
  {
    title: "Salesforce",
    icon: "salesforce.png",
    text: "Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites",
  },
  {
    title: "CRMNext",
    icon: "WebEx.png",
    text: "Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites",
  },
];
const brands2 = [
  {
    title: "Azure Active Directory",
    icon: "Azure.png",
    text: "Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites",
  },
  {
    title: "MS Teams",
    icon: "teams.png",
    text: "The following enterprise single sign-on (SSO) services come integrated with Vymo out-of-the-box.",
  },
  {
    title: "Google Suite",
    icon: "suite.png",
    text: "Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites",
  },
  {
    title: "WebEx",
    icon: "WebEx.png",
    text: "Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites",
  },
  {
    title: "CRMNext",
    icon: "salesforce.png",
    text: "Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites",
  },
];
interface IntegrationProps {
  title: string;
  icon: string;
  text: string;
}
function IntegrationCard({ title, icon, text }: IntegrationProps) {
  return (
    <IntegrationCardContainer>
      <div>
        <Image src={`/images/${icon}`} width="50px" height="50px" />
      </div>
      <CompanyName>{title}</CompanyName>
      <CompanyText>{text}</CompanyText>
    </IntegrationCardContainer>
  );
}
function IntegrationSection() {
  return (
    <IntegrationContainer>
      <IntegrationHeading>
        Turnkey Integrations with your sales tech stack
      </IntegrationHeading>
      <IntegrationText>Get up and running in months weeks!</IntegrationText>
      <CompanyContainer>
        {brands1.map((b, i) => (
          <IntegrationCard {...b} key={`one-${i}-${b.title}`} />
        ))}
        {brands1.map((b, i) => (
          <IntegrationCard {...b} key={`two-${i}-${b.title}`} />
        ))}
      </CompanyContainer>
      <CompanyContainer style={{ animationDelay: "-2.5s" }}>
        {brands2.map((b, i) => (
          <IntegrationCard {...b} key={`one-${i}-${b.title}`} />
        ))}
        {brands2.map((b, i) => (
          <IntegrationCard {...b} key={`two-${i}-${b.title}`} />
        ))}
      </CompanyContainer>
      <FrameContainer>
        <Image
          src="/images/frame.png"
          width="1440px"
          height="363px"
          layout="responsive"
        />
      </FrameContainer>
      <HelpButton>See how Vymo can help</HelpButton>
    </IntegrationContainer>
  );
}

export default IntegrationSection;
