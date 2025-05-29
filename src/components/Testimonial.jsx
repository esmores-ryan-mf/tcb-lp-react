import React from 'react';
import ReusableCard from './ReusableCard';
import styled from 'styled-components';
import data from '../constants/testimonialDb';

const Testimonial = () => {
  return (
    <Container>
      <div className="card-container">
        {data.map((item) => {
          return <ReusableCard key={item.id} {...item} isTestimonial={true} />;
        })}
      </div>
    </Container>
  );
};

export default Testimonial;

const Container = styled.section`
  text-align: center;
  padding: 0 20px 100px;

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .card-container {
      flex-direction: row;
      justify-content: center;
    }
  }

  @media (min-width: 1440px) {
    padding-bottom: 150px;
  }
`;
