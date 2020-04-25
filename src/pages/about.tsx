import { graphql } from 'gatsby';
import React from 'react';

import { GatsbySeo } from 'gatsby-plugin-next-seo';
import About from '../sections/about';

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        image: {
          childImageSharp: {
            fluid: any;
          };
        };
        foreword: string;
      };
      html: string;
    };
  };
}

const AboutPage = ({ data }: Props) => {
  const { foreword } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const imageFluid = data.markdownRemark.frontmatter.image.childImageSharp.fluid;

  return (
    <>
      <GatsbySeo title="about" />
      <About foreword={foreword} html={html} imageFluid={imageFluid} />
    </>
  );
};

export const query = graphql`
  query About {
    markdownRemark(fileAbsolutePath: {regex: "/about\\.md$/"}) {
      frontmatter {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        foreword
      }
      html
    }
  }
`;

export default AboutPage;
