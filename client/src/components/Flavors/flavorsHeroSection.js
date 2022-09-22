import React from "react";
import { Button } from "react-scroll";
import {
  FlavorContainer,
  FlavorRow,
  FlavorWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  FlavorRoute,
  ImgWrap,
  Img,
} from "./FlavorsElements.js";

function FlavorsHeroSection() {
  return (
    <>
      <FlavorContainer>
        <FlavorWrapper>
          <FlavorRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                    <Button></Button>
                  <FlavorRoute path="/flavors">Check Our Flavors!</FlavorRoute>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
                <Img />
            </ImgWrap>
            </Column2>
          </FlavorRow>
        </FlavorWrapper>
      </FlavorContainer>
    </>
  );
}

export default FlavorsHeroSection;
