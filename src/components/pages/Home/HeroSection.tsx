import LeftArrow from "@/Icons/LeftArrow";
import News from "@/Icons/News";
import Button from "@/ui/Button";
import Image from "next/image";
import {
  Title,
  BackDropContainer,
  FlexRow,
  HeroImageSection,
  HeroDiv,
  HomeContainer,
  ImageContainer,
  NewsContainer,
  HeroSecondaryText,
  NewsDescription,
  NewsTag,
  NewsTagContainer,
  PartnerText,
} from "./styled";

function HeroSection() {
  return (
    <FlexRow>
      <HeroDiv>
        <Title>Conventional CRMs are insufficient</Title>
        <HeroSecondaryText>
          What you need is an intelligent sales frontend that helps you drive
          interventions across the customer lifecycle to improve outcomes.
        </HeroSecondaryText>
        <Button>See how Vymo can help</Button>
      </HeroDiv>
      <HeroImageSection>
        <ImageContainer>
          <Image
            src="/images/magnet-me-315vPGsAFUk-unsplash.jpg"
            width="542px"
            height="557px"
            layout="responsive"
            style={{
              borderRadius: "0.5rem",
            }}
            objectFit="cover"
          />
          <BackDropContainer>
            <NewsContainer>
              <News style={{ marginTop: "5px" }} />
            </NewsContainer>
            <div>
              <NewsTag>To drive sales productivity bottom up</NewsTag>
              <NewsDescription>
                Free between 2 - 4 PM? Meet Acme Solutions
                <PartnerText>
                  (Gold Partner)
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "0.2rem" }}
                  >
                    <path
                      d="M0.0812644 9.12862C3.77191 9.10346 6.73789 5.2857 6.70595 0.601412C6.73789 5.2857 9.75564 9.06266 13.4463 9.0375C9.75564 9.06266 6.78967 12.8804 6.8216 17.5647C6.78967 12.8804 3.77191 9.10346 0.0812644 9.12862Z"
                      fill="#FFC75A"
                    />
                  </svg>
                </PartnerText>
              </NewsDescription>
            </div>
          </BackDropContainer>
        </ImageContainer>
      </HeroImageSection>
      <LeftArrow
        style={{
          position: "absolute",
          right: -93,
          top: 47,
          width: 116,
          height: 128,
        }}
      />
    </FlexRow>
  );
}

export default HeroSection;
