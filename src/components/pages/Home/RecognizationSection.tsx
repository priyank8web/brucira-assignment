import Button from "@/ui/Button";
import Image from "next/image";
import {
  AvatarCard,
  AvatarContainer,
  AvatarDesignation,
  AvatarImage,
  AvatarName,
  GarterContainer,
  GartnerCard,
  GartnerHeading,
  GartnerLogo,
  QuoteContainer,
  RecognizationContainer,
  RecognizationHeading,
  RoundCard,
  SecondaryText,
} from "./styled";

function RecognizationSection() {
  return (
    <RecognizationContainer>
      <RecognizationHeading>
        Recognized for driving innovation in Sales Engagement
      </RecognizationHeading>
      <GartnerCard>
        <GarterContainer>
          <GartnerLogo>
            <Image src="/images/gartner-logo.png" width="180px" height="40px" />
          </GartnerLogo>
          <div>
            <GartnerHeading>
              Vymo is a Representative Vendor in Gartner’s Sales Engagement
              Market Guide
            </GartnerHeading>
            <SecondaryText>
              Vymo should be of interest to application leaders supporting CRM
              Technologies and sales organizations (such as field sales and
              telesales) that need to make a step change in sales productivity
            </SecondaryText>
            <Button>Download Report</Button>
          </div>
        </GarterContainer>
      </GartnerCard>
      <AvatarCard>
        <AvatarContainer>
          <AvatarImage>
            <Image src="/images/user.png" width="57px" height="57px" />
          </AvatarImage>
          <AvatarName>Deepika Sharma</AvatarName>
          <AvatarDesignation>Director, Gartner</AvatarDesignation>
        </AvatarContainer>
        <QuoteContainer>
          “We selected Vymo because of its unique application of automation and
          AI technology that allows for seamless data capture and contextual
          recommendations. In 8 weeks we have got complete visibility into every
          individual’s productivity and capability.”
        </QuoteContainer>
      </AvatarCard>
    </RecognizationContainer>
  );
}

export default RecognizationSection;
