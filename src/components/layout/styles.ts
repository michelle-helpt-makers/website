import styled, { createGlobalStyle } from 'styled-components';

export const Header = styled.header`
  box-sizing: border-box;
  padding-bottom: 1vw;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-top: 1vw;
  width: 100%;
  z-index: 2;
`;

export const HeaderInner = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1800px;
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
`;

export const ContentWrapper = styled.div`
  padding-bottom: 3.3vmax;
  padding-right: 4vw;
  padding-top: 3.3vmax;
  box-sizing: content-box;
  margin: 0 auto;
  max-width: 1800px;
  padding-left: 4vw;
`;

export const Footer = styled.footer`
  position: fixed;
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
