import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <p>Copyright © TCB All Rights Reserved.</p>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: var(--color-black);
  color: var(--color-white);
  text-align: center;
  padding-block: 17px;
  font-size: 12px;
  height: 50px;
`;
