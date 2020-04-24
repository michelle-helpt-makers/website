import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Normalize } from 'styled-normalize';

import {
  GlobalStyle,
  Header,
  HeaderInner,
  HeaderTitle,
  Nav,
  ContentWrapper,
  Footer,
} from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
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

  return (
    <div>
      <link rel="stylesheet" href="https://use.typekit.net/kty0icp.css" />
      <Normalize />
      <GlobalStyle />
      <Header>
        <HeaderInner>
          <HeaderTitle>
            <a href="/">Michelle Helpt Makers</a>
          </HeaderTitle>
          <Nav>
            <Link to="about">About</Link>
            <Link className="active" to="contact">
              Contact
            </Link>
          </Nav>
        </HeaderInner>
      </Header>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer>
        <a href={`mailto:${email}`}>{email}</a>
      </Footer>
    </div>
  );
};

export default Layout;
