import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/images/banner-small.jpg';
import bannerImageLarge from '../assets/images/banner-full-w-small.jpg';

const Banner = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <source
          srcSet={bannerImageLarge}
          media="(min-width: 768px)"
          width={2000}
          height={600}
          loading="lazy"
          alt="banner-image-large"
        />
        <img src={bannerImage} alt="banner-image" width={375} height={600} loading="lazy" />
      </ImageContainer>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.section`
  padding-bottom: 40px;
  @media (min-width: 1440px) {
    padding-bottom: 60px;
  }
`;

const ImageContainer = styled.picture`
  line-height: 0;
`;
