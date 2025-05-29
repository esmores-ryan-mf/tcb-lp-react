import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

const ReusableCard = ({ title, image, description, hasButton, isPhilosophy, isTestimonial }) => {
  return (
    <Container $isPhilosophy={isPhilosophy} $isTestimonial={isTestimonial}>
      <picture className="image-container item1">
        <source
          srcSet={image}
          alt={`strength-image-large`}
          width={600}
          height={400}
          loading="lazy"
          media="(min-width: 768px)"
        />
        <img src={image} alt={`strength-image`} width={335} height={224} loading="lazy" />
      </picture>
      <div className="text-container item2">
        {title && <h3>{title}</h3>}
        <p>{description}</p>
        {hasButton && (
          <Link to="/">
            <button>詳しく見る</button>
            <span>
              <FaChevronRight />
            </span>
          </Link>
        )}
      </div>
    </Container>
  );
};

export default ReusableCard;

const Container = styled.article`
  box-shadow: 0px 0px 10px #00000040;
  width: 100%;
  display: grid;
  color: var(--color-black);
  background-color: var(--color-white);

  .image-container.item1 {
    line-height: 0;
    img {
      box-shadow: 5px 5px 10px #00000040;
    }
    margin-bottom: 20px;
  }

  .text-container.item2 {
    margin-bottom: 20px;
    text-align: left;
    padding-inline: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    h3 {
      margin-top: 20px;
      font-size: 20px;
      letter-spacing: 0;
      font-weight: 400;
      position: relative;
      padding-left: 15px;
      white-space: pre-line;

      &:before {
        content: '';
        position: absolute;
        width: 5px;
        height: 100%;
        left: 0;
        top: 0;
        background-color: var(--color-gray);
      }
    }

    p {
      font-size: 15px;
      font-family: var(--font-family-yg);
      font-weight: 600;
      white-space: pre-line;
      line-height: 25px;
    }

    a {
      position: relative;

      button {
        width: 100%;
        background-color: var(--color-black);
        color: var(--color-white);
        font-size: 16px;
        padding: 20px;
        cursor: pointer;
        transition:
          background-color 0.2s ease,
          color 0.2s ease;

        &:hover {
          background-color: var(--color-gray-light);
          color: var(--color-black);
        }
      }

      span {
        position: absolute;
        right: 5px;
        top: 55%;
        color: var(--color-white);
        transform: translateY(-50%);
      }
    }
  }

  @media (min-width: 768px) {
    ${(props) =>
      !props.$isTestimonial &&
      css`
        grid-template-columns: 1fr 1fr;
        .item1,
        .item2 {
          grid-row: 1;
        }

        .image-container.item1 {
          grid-column: 1/2;
        }
        .text-container.item2 {
          grid-column: 2/3;
          margin-block: 30px;
          h3 {
            margin-top: 0;
          }
          p {
            line-height: 30px;
          }
        }

        &:nth-child(even) {
          .item1 {
            grid-column: 2/3;
            justify-self: end;
          }
          .item2 {
            grid-column: 1/2;
          }
        }

        a {
          max-width: 330px;
        }
      `}

    ${(props) => props.$isTestimonial && css``}
  }

  @media (min-width: 1024px) {
    ${(props) =>
      !props.$isTestimonial &&
      css`
        max-width: 1100px;

        .item1,
        .item2 {
        }

        .image-container.item1 {
          transform: translateY(-12%) translateX(-10%);
        }
        .text-container.item2 {
          padding-inline: 0 60px;
          margin-block: 60px;
          h3 {
            font-size: 25px;
          }
          p {
            font-size: 16px;
          }
        }

        &:nth-child(even) {
          .item1 {
            transform: translateY(-12%) translateX(10%);
          }
          .item2 {
            padding-inline: 60px 0;
          }
        }
      `}

    ${(props) =>
      props.$isTestimonial &&
      css`
        max-width: 353px;

        .text-container.item2 {
          padding-inline: 30px;
          margin-block: 10px 37px;
          p {
            font-size: 16px;
            line-height: 30px;
          }
        }
      `}
  }
`;
