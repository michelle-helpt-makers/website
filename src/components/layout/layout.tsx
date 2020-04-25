import { Link, useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import { Normalize } from 'styled-normalize';
import { HamburgerSpin } from 'react-animated-burgers';

import {
  ContentWrapper,
  Footer,
  GlobalStyle,
  Header,
  HeaderInner,
  HeaderTitle,
  Nav,
  Wrapper,
  BurgerWrapper,
} from './styles';

interface Props {
  children: React.ReactNode;
  location: {
    pathname: string;
  };
}

const Layout = ({ children, location }: Props) => {
  const data = useStaticQuery(graphql`
    query Layout {
      markdownRemark(fileAbsolutePath: { regex: "/contact-info.md$/" }) {
        frontmatter {
          email
        }
      }
    }
  `);
  const { email } = data.markdownRemark.frontmatter;
  const { pathname } = location;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Wrapper>
      <link rel="stylesheet" href="https://use.typekit.net/kty0icp.css" />
      <Normalize />
      <GlobalStyle />
      <Header>
        <HeaderInner>
          <HeaderTitle>
            <a href="/">Michelle Helpt Makers</a>
          </HeaderTitle>
          <Nav className={showMenu ? 'opened' : ''}>
            <Link
              className={pathname === '/about' ? 'active' : ''}
              onClick={() => setShowMenu(false)}
              to="about"
            >
              About
            </Link>
            <Link
              className={pathname === '/contact' ? 'active' : ''}
              onClick={() => setShowMenu(false)}
              to="contact"
            >
              Contact
            </Link>
          </Nav>
          <BurgerWrapper>
            <HamburgerSpin isActive={showMenu} toggleButton={() => setShowMenu((prev) => !prev)} />
          </BurgerWrapper>
        </HeaderInner>
      </Header>
      <ContentWrapper>
        <div>{children}</div>
      </ContentWrapper>
      <Footer>
        <a href={`mailto:${email}`}>{email}</a>
      </Footer>
    </Wrapper>
  );
};

export default Layout;
