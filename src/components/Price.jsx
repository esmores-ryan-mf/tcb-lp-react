import React from 'react';
import styled from 'styled-components';
import PriceCard from './PriceCard';

const Price = () => {
  return (
    <Container>
      <div className="title-container">
        <h2>料金</h2>
        <h3>Price</h3>
      </div>
      <PriceCard />
    </Container>
  );
};

export default Price;

const Container = styled.section`
  text-align: center;
  padding-inline: 20px;
  min-height: 1100px;

  .title-container {
    margin-bottom: 25px;
    h2 {
      color: var(--color-black);
      font-size: 35px;
      font-weight: 400;
    }
    h3 {
      font-size: 25px;
      color: var(--color-gray-light);
      letter-spacing: 7.5px;
      font-weight: 400;
    }
  }

  @media (min-width: 1024px) {
    min-height: 900px;

    .title-container {
      h2 {
        font-size: 60px;
      }
      h3 {
        font-size: 30px;
      }
    }
  }
`;
