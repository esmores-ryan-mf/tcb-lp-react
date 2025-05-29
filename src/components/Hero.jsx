import React from 'react';
import styled from 'styled-components';
import heroImageSmall from '../assets/images/hero-small.jpg';
import heroImageSmallLarge from '../assets/images/hero-large.jpg';

const Hero = () => {
  return (
    <Container>
      <HeroImageWrapper>
        <source
          srcSet={heroImageSmallLarge}
          alt="hero-image-large"
          width={2000}
          height={600}
          media="(min-width: 768px)"
        />
        <img src={heroImageSmall} alt="hero-image-small" width={375} height={400} />
      </HeroImageWrapper>

      <div className="hero-text-container">
        <h1>美容医療はファッションへ</h1>
      </div>
    </Container>
  );
};

export default Hero;

const Container = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 60px;

  line-height: 0;

  .hero-text-container {
    background: linear-gradient(90deg, #ffffff00 0%, #000000 49%, #000000 100%) 0% 0% no-repeat
      padding-box;
    bottom: 40px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: var(--color-white);
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 4px;
    }

    @media (min-width: 768px) {
      height: 70px;
      top: 50%;
      left: 50%;
      width: 50%;
    }
    @media (min-width: 1440px) {
      height: 150px;
      transform: translate(-14%, -30%);
      width: 59%;

      h1 {
        margin-left: -20%;
        letter-spacing: 7px;
        font-size: 35px;
      }
    }
  }
`;

const HeroImageWrapper = styled.picture``;
