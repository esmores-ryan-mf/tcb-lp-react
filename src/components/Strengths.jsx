import React from 'react';
import styled from 'styled-components';
import data from '../constants/strengthDb';
import StrengthCard from './ReusableCard';
import background from '../assets/images/philosophy-bg-large.jpg';

const Strengths = () => {
  return (
    <Container>
      <div className="bg-wrapper">
        <img src={background} alt="background" width={1300} height={800} loading="lazy" />
      </div>

      <div className="title-container">
        <h2>TCBの強み</h2>
        <h3>Value</h3>
      </div>
      <div className="card-container">
        {' '}
        {data.map((item) => {
          const hasButton = item ? true : false;
          return <StrengthCard key={item.id} {...{ ...item, hasButton }} isPhilosophy={true} />;
        })}
      </div>
    </Container>
  );
};

export default Strengths;

const Container = styled.section`
  text-align: center;
  padding: 80px 20px;
  position: relative;
  overflow-x: hidden;

  .bg-wrapper {
    display: none;
  }
  .title-container {
    margin-bottom: 35px;
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

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    .bg-wrapper {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    .card-container {
      gap: 70px;
    }
  }

  @media (min-width: 1024px) {
    padding-bottom: 150px;
    .bg-wrapper {
      top: 49%;
      left: 7%;
    }
    .title-container {
      margin-bottom: 142px;
    }
    .card-container {
      gap: 115px;
    }
  }
  @media (min-width: 1440px) {
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
