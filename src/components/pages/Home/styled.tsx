import Container from "@/ui/Container";
import Button from "@/ui/Button";
import styled, { keyframes } from "styled-components";
export const HomeContainer = styled(Container)`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* overflow: hidden; */
  /* top: 10vh; */
  /* height: 100vh; */
`;
export const HeroDiv = styled.div`
  align-self: center;
  margin-right: 2rem;
  width: 50%;
`;
export const HeroImageSection = styled.div`
  width: 50%;
  align-self: center;
  position: relative;
`;
export const ImageContainer = styled.div`
  pointer-events: none;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-left: 20%;
  width: 80%;
  right: 0px;
  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;

    bottom: 3rem;
    left: 60%;

    height: 200%;

    background: #1c122e;
  }
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FeatureListContainer = styled.div`
  /* flex: 0.2; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.56rem;
`;
export const FeatureText = styled.p`
  font-weight: 500;
  line-height: 1.5rem;
  width: 60%;
  color: ${({ theme }) => theme.colors.black};
`;
export const BackDropContainer = styled.div`
  position: absolute;
  width: calc(80% - 4rem);
  gap: 1rem;
  bottom: 4rem;
  margin: 1rem 2rem;
  padding: 0.8rem 1rem;
  border-radius: 0.6rem;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
`;

export const NewsContainer = styled.span`
  align-self: center;
  padding: 0.2rem 0.6rem;
  height: 100%;
  border-radius: 0.6rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;
export const NewsTag = styled.div`
  display: inline-block;
  margin-bottom: 0.4rem;
  border-radius: 0.25rem;
  padding: 0.2rem 0.6rem;
  background: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts[1]};
  font-size: 0.6rem;
  color: white;
`;
export const NewsTagContainer = styled.p``;
export const NewsDescription = styled.div`
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts[0]};
  color: white;
`;
export const PartnerText = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts[0]};
  line-height: 1;
  color: white;
`;
export const HeroSecondaryText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  width: 80%;
  opacity: 0.6;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;
export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  line-height: 5rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const SectionHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts[1]};
  margin-bottom: 3.75rem;
`;

export const RoundCard = styled.div`
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;
`;

/**
 * Power section
 *
 */

export const PowerContainer = styled.div`
  padding: 7rem 0 0rem 0;
  /* margin-bottom: 10rem; */
`;
export const PowerHeading = styled(SectionHeading)`
  padding: 0 20vw;
`;

export const PowerCardHeading = styled.div`
  color: white;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: 700;
`;
export const PowerCardText = styled.div`
  color: #ffffff9a;
  /* opacity: 0.6; */
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: 500;
`;
export const PowerCardImage = styled.div`
  /* float: right; */
  position: relative;
  transition: 0.2s all;
  flex: 0.5;
  align-self: center;
`;
export const CenterRow = styled.div`
  flex: 0.5;
  padding-left: 2rem;
  padding-right: 5.5rem;
  align-self: center;
  /* display: flex; */
  /* flex-direction: column; */
  /* vertical-align: middle; */
  /* height: 100%; */
`;
export const PowerCardContainer = styled(RoundCard)`
  cursor: pointer;
  /* pointer-events: none; */
  position: absolute;
  overflow: hidden;
  height: 30rem;
  width: 85%;
  display: flex;
  flex-direction: row;
  background: #2c233d;
  padding-top: 0;
  padding-bottom: 0;
  z-index: 1;
  transition: 0.6s all;
  &.active {
    pointer-events: all;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 0;
  }
  &.active:first-child ${CenterRow} {
    flex: 1;
    align-self: flex-start;
    padding-top: 0.5rem;
  }
  &.active:last-child ${CenterRow} {
    flex: 1;
    align-self: flex-end;
    padding-bottom: 0.5rem;
  }
  /* &.active ${PowerCardText} {
    display: none;
  } */
  /* &.active:first-child ${PowerCardHeading} {
    margin-bottom: 10rem;
  }
  &.active:last-child ${PowerCardHeading} {
    margin-top: 10rem;
  } */

  /* &.active ${PowerCardImage} {
    opacity: 0;
    position: absolute;
  } */
`;
export const PowerCardsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 8rem;
  overflow: hidden;
  height: 40rem;
`;
/**
 * Recognization section
 */

export const RecognizationContainer = styled.div`
  padding: 7rem 0 9rem 0;
`;
export const RecognizationHeading = styled(SectionHeading)`
  padding: 0 10vw;
`;
export const GarterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
export const GartnerLogo = styled.div`
  display: inline-block;
  padding: 3rem;
  border-radius: 0.625rem;
  background: #307388;
  align-self: flex-start;
`;
export const GartnerHeading = styled.h2`
  width: 85%;
`;
export const SecondaryText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.6;
  margin-top: 1rem;
  width: 82%;
  margin-bottom: 2.5rem;
`;

export const GartnerCard = styled(RoundCard)`
  margin: 0 auto;
  padding: 2.5rem 0rem 2.5rem 2rem;
  width: 70%;
  background: white;
  box-shadow: 0px 32px 54px 0px #0000000f;
`;
export const AvatarCard = styled(RoundCard)`
  z-index: -1;
  position: relative;
  top: -3.5rem;
  margin: 0 auto;
  background: #eff4f9;
  padding: 6rem 0rem 2.5rem 2rem;
  width: 70%;
  display: flex;
  flex-direction: row;
`;
export const AvatarContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const QuoteContainer = styled.div`
  flex: 0.9;
  align-self: center;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.6;
`;
export const AvatarName = styled.p`
  text-align: center;
`;
export const AvatarDesignation = styled.p`
  text-align: center;
  line-height: 21px;
  font-size: 0.875;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.4;
`;
export const AvatarImage = styled.div`
  margin: 0 auto;
`;

/**
 * Integration section
 */

export const IntegrationContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100vw;
  padding: 7rem 0 9rem 0;
  background: #1c122e;
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: -40px;
    /* width: calc(100vw - 80px);
    min-width: calc(100vw - 80px); */
  }
  @media ${({ theme }) => theme.device.laptop} {
    margin-left: -80px;
    /* width: calc(100vw - 160px);
    min-width: calc(100vw - 160px); */
  }
  @media ${({ theme }) => theme.device.laptopL} {
    margin-left: calc((-100vw + 1280px) / 2);
    /* width: 1280px;
    min-width: 1280px; */
  }
`;
export const IntegrationHeading = styled(SectionHeading)`
  color: white;
  margin-bottom: 0.5rem;
  padding: 0 27vw;
`;
export const IntegrationText = styled.p`
  text-align: center;
  color: #ffffff;
  opacity: 0.5;
`;
export const CompanyName = styled.p`
  color: white;
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fonts[1]};
`;
export const CompanyText = styled.p`
  color: white;
  font-size: 0.875rem;
  opacity: 0.6;
  font-family: ${({ theme }) => theme.fonts[0]};
  height: 70px;
`;
export const IntegrationCardContainer = styled.div`
  text-align: left;
  display: inline-block;
  /* width: 50%; */
  background: #2c233d;
  font-weight: 500;
  border-radius: 1.25rem;
  padding: 1.875rem 2rem;
  width: 400px;
  margin: 0px 1rem;
`;
export const marquee = keyframes`
   0% { transform: translate(0, 0); }
  100% { transform: translate(calc(-2000px - 10rem), 0); }
`;
export const CompanyContainer = styled.div`
  /* position: absolute; */
  position: relative;
  width: calc(4000px + 20rem);
  /* height: 30px; */
  margin: 2rem 0rem;
  overflow: hidden;
  display: flex;
  animation: ${marquee} 25s linear infinite;
  /* gap: 2rem; */
  /* animation-play-state: running;
  &:hover {
    animation-play-state: paused;
  } */
`;

export const HelpButton = styled(Button)`
  /* z-index: 10; */
  position: relative;
  margin-top: 4rem;
`;
export const FrameContainer = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100vw;
  height: 363px;
  bottom: 0.625rem;
  overflow: hidden;
  z-index: 0;
`;

/**
 * sales sections
 */
export const SalesContainer = styled.div`
  /* margin-top: 5rem; */
  /* margin-bottom: 1.25rem; */
  display: flex;
  flex-direction: row;
  background: white;
  position: relative;
  overflow: hidden;
  width: 100vw;
  padding: 7rem 0 10rem 0;
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: -40px;
    /* width: calc(100vw - 80px);
    min-width: calc(100vw - 80px); */
  }
  @media ${({ theme }) => theme.device.laptop} {
    margin-left: -80px;
    /* width: calc(100vw - 160px);
    min-width: calc(100vw - 160px); */
  }
  @media ${({ theme }) => theme.device.laptopL} {
    margin-left: calc((-100vw + 1280px) / 2);
    /* width: 1280px;
    min-width: 1280px; */
  }
`;
export const SalesTextContainer = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    width: 60%;
    margin-left: 40px;
    /* width: calc(100vw - 80px);
    min-width: calc(100vw - 80px); */
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 40%;
    margin-left: 80px;
    /* width: calc(100vw - 160px);
    min-width: calc(100vw - 160px); */
  }
  @media ${({ theme }) => theme.device.laptopL} {
    width: 35%;
    margin-left: calc((100vw - 1280px) / 2);
    /* width: 1280px;
    min-width: 1280px; */
  }
  /* flex: 0.7; */
`;
export const SalesHeading = styled.div`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts[1]};
`;
export const SalesText = styled.div`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts[0]};
  margin: 0.875rem 0 2.5rem 0;
`;
export const SalesImageContainer = styled.div`
  /* flex: 2; */

  top: -10%;
  right: -10%;
  height: 100%;
  width: 80%;
  position: absolute;
`;
