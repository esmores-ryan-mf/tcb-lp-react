import React from 'react';
import Philisophy from '../components/Philosophy';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Strengths from '../components/Strengths';
import Banner from '../components/Banner';
import Testimonial from '../components/Testimonial';
import Price from '../components/Price';

const Homepage = () => {
  return (
    <Container>
      <Hero />
      <Philisophy />
      <Strengths />
      <Banner />
      <Testimonial />
      <Price />
    </Container>
  );
};

export default Homepage;

const Container = styled.main`
  max-width: 2000px;
  margin: 0 auto;
`;
