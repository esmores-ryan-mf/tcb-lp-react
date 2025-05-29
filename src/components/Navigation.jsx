import React, { useState } from 'react';
// import { useNavigate } from 'react-router'; // Commenting out as it's unused after refactor
import styled from 'styled-components';
import logoSmall from '../assets/images/logo-small.jpg';
import logoLarge from '../assets/images/logo-large.jpg';
import reservationIcon from '../assets/images/reservation-icon-small.svg';
import { Link } from 'react-router-dom';
import { data } from '../constants/links';
import { FaChevronRight } from 'react-icons/fa';

const Navigation = () => {
  // const navigate = useNavigate(); // Commenting out as it's unused after refactor
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const body = document.body;
    if (!isOpen) {
      body.style.position = 'fixed';
    } else {
      body.style.position = 'relative';
    }
  };

  return (
    <Container>
      <LogoWrapper href="/">
        <picture>
            <source srcSet={logoLarge} media="(min-width: 1440px)" width="200px" height="auto" alt="tcb-logo-large"/>
            <img src={logoSmall} alt="tcb-logo" className="logo-small" width="150px" height="auto"/>
        </picture>
      </LogoWrapper>
      <HamburgerIcon onClick={toggleMenu} className={isOpen ? 'open' : ''}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </HamburgerIcon>
      <NavHamburgerContainer style={{ display: isOpen ? 'block' : 'none' }}>
        <nav className="nav-list">
          <ul>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.url}>
                    <span>{item.text}</span>
                    <FaChevronRight />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </NavHamburgerContainer>
      <NavList>
        <ul>
          {data.map((item) => {
            const { subMenu, id, text, url } = item;
            const hasSubMenu = subMenu ? true : false;
            
            return (
              <li className="nav-item" key={id}>
                {hasSubMenu ? (
                  <>
                    <span className="menu-text">{text}</span>
                    <ul className="submenu-container">
                      {subMenu.map((menu) => (
                        <li
                          className="submenu-item"
                          key={menu.id}
                        >
                          <Link to={menu.url}>
                            <FaChevronRight />
                            <span>{menu.text}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={url}>
                    <span>{text}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </NavList>
      <Link to="/reservation" className="reservation-container">
        <div className="reservation-link">
            <img src={reservationIcon} alt="reservation-icon" />
            <span>WEB 予約</span>
        </div>
      </Link>
    </Container>
  );
};

export default Navigation;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-black);
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3);
  gap: 20px;

  .reservation-container {
    width: 150px;
    background-color: var(--color-black);
    color: var(--color-white);
    display: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }

    img {
      width: 20px;
    }

    span {
      font-size: 14px;
    }
  }

  @media (min-width: 1024px) {
    .reservation-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;

      .reservation-link {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 9px;
      }
    }
  }

  @media (min-width: 1440px) {
    
    .reservation-container {
      width: 200px;

      img {
        width: 28px;
      }

      span {
        font-size: 16px;
      }

      .reservation-link {
        gap: 29px;
      }
    }
  }
`;

const LogoWrapper = styled.a`
  margin-left: 20px;
  line-height: 0;
`;

const NavList = styled.nav`
  display: none;

  .nav-item {
    position: relative;
    padding: 20px 0;
    font-size: 13px;

    .menu-text {
      cursor: pointer;
    }

    &:hover {
      &:after {
        content: '';
        height: 2px;
        background-color: var(--color-black);
        position: absolute;
        bottom: 5px;
        left: -20px;
        width: calc(100% + 40px);
      }

      .submenu-container {
        opacity: 0.8;
        visibility: visible;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .submenu-container {
    background-color: var(--color-black);
    color: var(--color-white);
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;

    &:hover {
      opacity: 0.8;
      visibility: visible;
    }

    .submenu-item {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 5px 10px;
        text-decoration: none;
        color: inherit;

        &:hover {
          background-color: var(--color-white);
          color: var(--color-black);
        }
      }
    }
  }

  @media (min-width: 1024px) {
    display: block;

    ul {
      display: flex;
      gap: 15px;
    }
  }

  @media (min-width: 1440px) {
    .nav-item {
      font-size: 16px;
    }
    ul {
      gap: 20px;
    }
    .submenu-container {
      gap: 50px;
    }
  }

  @media (min-width: 1600px) {
    ul {
      gap: 50px;
    }
  }
`;

const NavHamburgerContainer = styled.aside`
  display: none;
  color: var(--color-white);
  background-color: var(--color-black);
  position: fixed;
  font-size: 16px;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  overflow-y: auto;

  li {
    border-bottom: 1px solid var(--color-gray-light);
    opacity: 0.8;
    position: relative;

    padding: 16px 14px;

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (min-width: 768px) {
    li {
      padding-inline: 50px;
    }
  }
`;

const HamburgerIcon = styled.div`
  margin-right: 20px;
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 10;

  @media (min-width: 1024px) {
    display: none;
  }

  .line {
    width: 100%;
    height: 3px;
    background-color: var(--color-black);
    transition: all 0.3s ease-in-out;
  }

  &.open .line:nth-child(1) {
    transform: translateY(12.5px) rotate(45deg);
  }

  &.open .line:nth-child(2) {
    opacity: 0;
  }

  &.open .line:nth-child(3) {
    transform: translateY(-14.5px) rotate(-45deg);
  }
`;
