import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import {
  PowerCardContainer,
  PowerContainer,
  PowerHeading,
  PowerCardHeading,
  PowerCardText,
  PowerCardImage,
  PowerCardsContainer,
  CenterRow,
} from "./styled";
import { OutlineButton } from "@/ui/Button";
import RightArrow from "@/Icons/RightArrow";

const cards = [
  {
    title: "1. Personal Assistant",
    text: "Vymo automatically captures all sales activities so your sellers don’t have to report them manually. Vymo also helps sellers plan their schedules so they can engage with customers or partners intelligently",
    image: {
      src: "/images/personal_assistant.svg",
      width: "393px",
      height: "400px",
    },
    padding: true,
  },
  {
    title: "2. Personal Coach",
    text: "Vymo understands what makes your best sellers successful and nudges best behaviors proactively to the rest of your team. Vymo also suggests interventions based on insights to improve outcomes.",
    image: {
      src: "/images/personal_coach.svg",
      width: "393px",
      height: "440px",
    },
    padding: false,
  },
];

function PowerSection() {
  const [firstActive, setFirstActive] = useState<boolean>(true);
  const animation = () => {
    const tl = gsap.timeline({ paused: false });
    if (firstActive) {
      tl.set("#simage", {
        opacity: 0,
        y: "5rem",
      })

        .set("#stext", {
          display: "block",
          delay: 0,
          // y: 0,
          opacity: 0,
        })
        .to("#ftext", {
          opacity: 0,
          y: "1rem",
          duration: 0.5,
        });
      tl.to("#fimage", {
        opacity: 0,
        delay: -0.5,
        duration: 0.1,
        y: "-5rem",
      }).to("#stext", {
        opacity: 1,
        y: 0,
        duration: 0.1,
      });
      // tl.from("#simage", {
      //   y: "-10rem",
      // });
      tl.to("#simage", {
        y: 0,
        display: "block",
        opacity: 1,
        duration: 0.2,
      });
    } else {
      tl.set("#fimage", {
        opacity: 0,
        y: "-5rem",
      })
        .set("#stext", {
          display: "block",
          delay: 0,
          opacity: 0,
        })
        .to("#stext", {
          opacity: 0,
          y: "1rem",
          duration: 0.1,
          display: "none",
        })
        .to("#simage", {
          opacity: 0,
          delay: -0.5,
          duration: 0.1,
          y: "-5rem",
        })
        .to("#simage", {
          display: "none",
          duration: 0,
        })
        .to("#ftext", {
          opacity: 1,
          y: 0,
          duration: 0.1,
        });
      tl.to("#fimage", {
        y: 0,
        display: "block",
        opacity: 1,
        duration: 0.2,
      });
    }
  };
  const firstClick = () => {
    if (firstActive) return;
    setFirstActive(true);
    animation();
  };
  const secondClick = () => {
    if (!firstActive) return;
    setFirstActive(false);
    animation();
  };

  return (
    <PowerContainer>
      <PowerHeading>
        The power of an intelligent Assistant and a Coach
      </PowerHeading>

      <PowerCardsContainer>
        <PowerCardContainer
          id="fPowerCard"
          onClick={firstClick}
          className={!firstActive && "active"}
        >
          <CenterRow>
            <PowerCardHeading id="fheading">{cards[0].title}</PowerCardHeading>
            <PowerCardText id="ftext">
              {cards[0].text}
              <OutlineButton id="fbtn">
                See how it works
                <RightArrow />
              </OutlineButton>
            </PowerCardText>
          </CenterRow>
          <PowerCardImage id="fimage">
            <Image {...cards[0].image} layout="responsive" />
          </PowerCardImage>
        </PowerCardContainer>
        <PowerCardContainer
          id="sPowerCard"
          style={{ top: "4rem" }}
          onClick={secondClick}
          className={firstActive && "active"}
        >
          <CenterRow>
            <PowerCardHeading id="sheading">{cards[1].title}</PowerCardHeading>
            <PowerCardText id="stext" style={{ opacity: 0, display: "none" }}>
              {cards[1].text}
              <OutlineButton id="sbtn">
                See how it works
                <RightArrow />
              </OutlineButton>
            </PowerCardText>
          </CenterRow>
          <PowerCardImage id="simage" style={{ display: "none", opacity: "0" }}>
            <Image {...cards[1].image} layout="responsive" />
          </PowerCardImage>
        </PowerCardContainer>
      </PowerCardsContainer>
    </PowerContainer>
  );
}

export default PowerSection;
