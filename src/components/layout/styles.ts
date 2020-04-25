import styled, { createGlobalStyle } from 'styled-components';
import { down, up } from 'styled-breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  box-sizing: border-box;
  padding-bottom: 1vw;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-top: 1vw;
  width: 100%;
  z-index: 2;
  position: relative;

  ${down('tablet')} {
    padding: 6vw;
  }
`;

export const HeaderInner = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1800px;

  ${down('tablet')} {
    justify-content: space-between;
  }
`;

export const HeaderTitle = styled.div`
  color: #545459;
  font-family: cormorant-garamond;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
  line-height: 1.4em;
  text-transform: none;

  ${down('tablet')} {
    font-size: 1.2rem;
  }
`;

export const Nav = styled.nav`
  color: #808589;
  display: inline-flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-wrap: wrap;
  font-family: adobe-garamond-pro;
  justify-content: flex-end;
  margin-left: auto;
  padding-left: 2vw;
  text-align: right;

  a {
    backface-visibility: hidden;
    display: block;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0em;
    line-height: 1.8em;
    padding: 0.1em 0;
    text-transform: none;

    &:not(:first-child) {
      margin-left: 1.5vw;
    }

    &.active {
      background-repeat: repeat-x;
      background-image: linear-gradient(to right, currentColor 100%, currentColor 0);
      background-size: 1px 1px;
      background-position: 0 calc(100% - 0.1em);
      white-space: initial;
    }
  }

  ${down('tablet')} {
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.5s all;
    padding: 0;
    z-index: -1;

    a {
      padding: 0.35em;
      font-size: 6.6vmin;
      height: 1.8rem;
      transform: translateY(2rem);
      transition: 0.5s all;

      &:not(:first-child) {
        margin: 0;
      }

      &.active {
        background-image: none;
      }
    }

    &.opened {
      opacity: 1;
      pointer-events: auto;

      a {
        transform: translateY(0);
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  align-items: center;
  box-sizing: content-box;
  display: flex;
  flex: 1;
  margin: 0 auto;
  max-width: 1800px;
  padding-bottom: 3.3vmax;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-top: 3.3vmax;

  ${down('tablet')} {
    padding-left: 6vw;
    padding-right: 6vw;
  }
`;

export const Footer = styled.footer`
  right: 0;
  bottom: 0;
  padding-bottom: 1vw;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-top: 1vw;
  text-align: right;
  color: #1470af;
  font-size: 1.6rem;
  line-height: 1.3664;
  font-family: cormorant-garamond;
`;

export const GlobalStyle = createGlobalStyle`
  font-family: "adobe-garamond-pro","proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 1.2rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 1.8em;
  text-transform: none;
  word-wrap: break-word;
  overflow-wrap: break-word;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const BurgerWrapper = styled.div`
  color: red;

  span {
    background-color: #808589;
    height: 1px;

    &::before,
    &::after {
      background-color: #808589;
      height: 1px;
    }
  }

  ${up('tablet')} {
    display: none;
  }
`;
