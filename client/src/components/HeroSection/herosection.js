import React from "react";
import Video from "../../Media/Video Of Scooping Icecream.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrap,
  HeroRoute
} from "./HeroElements.js";
// import Build from "../../pages/build";

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/pm4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Build-A-Cone Now!</HeroH1>
        <HeroP>
          Sign up now and choose up to 3 scoops of your favourite flavors to
          enjoy some delicious Sunny Ice Cream today!
        </HeroP>
        <HeroBtnWrap>
          <HeroRoute to={'/build'}>
            Build Yours
          </HeroRoute>
        </HeroBtnWrap>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
