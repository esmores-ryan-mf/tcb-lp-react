import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import data from '../constants/priceDb';
import ScrollHint from 'scroll-hint';
import 'scroll-hint/css/scroll-hint.css';

const PriceCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      new ScrollHint('.js-scrollable', {
        suggestiveShadow: true,
        i18n: {
          scrollable: 'スクロールできます',
        },
      });
    }
  }, [isOpen]);

  return (
    <Container>
      <div className="name-container" role="button" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        <span>二重整形・目元整形</span>
        {isOpen ? <CiCircleMinus className="icon" /> : <CiCirclePlus className="icon" />}
      </div>
      <div
        className="scroll-container js-scrollable"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <table className="price-table">
          <thead>
            <tr>
              <th>施術名</th>
              <th>概要</th>
              <th>備考</th>
              <th>料金</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              const { title, price, description, notes } = item;
              return (
                <tr key={item.id}>
                  <td className="cell-title">{title}</td>
                  <td>{description}</td>
                  <td>{notes}</td>
                  <td className="cell-price">{price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default PriceCard;

const Container = styled.article`
  max-width: 1100px;
  margin: 0 auto;

  .name-container {
    cursor: pointer;
    background-color: var(--color-black);
    color: var(--color-white);
    padding: 15px;
    position: relative;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      font-size: 30px;
    }
  }

  .scroll-container {
    font-size: 14px;
  }

  .price-table {
    width: 100%;
    min-width: 768px;
    border-collapse: collapse;
    box-shadow: 0px 0px 10px #00000040;
    border: 1px solid var(--color-gray-light);
    font-family: var(--font-family-yg);

    thead tr {
      background-color: var(--color-gray);
      color: var(--color-white);
    }

    th,
    td {
      padding: 15px 10px;
      text-align: left;
      border-bottom: 1px solid var(--color-gray-light);
      min-width: 80px;
      position: relative;
    }

    th {
      text-align: center;
    }

    th:not(:last-child),
    td:not(:last-child) {
      border-right: 1px solid var(--color-gray-light);
    }

    .cell-title {
      font-weight: bold;
      background-color: var(--color-light);
    }

    .cell-price {
      text-align: right;
    }
  }

  @media (min-width: 768px) {
    .name-container {
      font-size: 25px;
    }

    .price-table {
      min-width: unset;
    }
  }
`;
