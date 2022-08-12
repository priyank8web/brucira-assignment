// import styled from "styled-components";
import FeatureList from "./FeatureList";
import HeroSection from "./HeroSection";
import IntegrationSection from "./IntegrationSection";
import PowerSection from "./PowerSection";
import RecognizationSection from "./RecognizationSection";
import SalesSection from "./SalesSection";
import {
  // BackDropContainer,
  // FlexRow,
  // HeroImageSection,
  // HeroSection,
  HomeContainer,
  // ImageContainer,
  // NewsContainer,
  // NewsDescription,
  // NewsTag,
  // NewsTagContainer,
  // PartnerText,
} from "./styled";

function HomePage() {
  return (
    <div>
      <HomeContainer>
        <HeroSection />
        <FeatureList />
        <PowerSection />
        <RecognizationSection />
        <IntegrationSection />
        <SalesSection />
      </HomeContainer>
    </div>
  );
}

export default HomePage;
