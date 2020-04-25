import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';

import Home from '../sections/home';

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        image: {
          childImageSharp: {
            fluid: any;
          };
        };
      };
      fields: {
        taglineHtml: string;
      };
    };
  };
}

const IndexPage = ({ data }: Props) => {
  const { taglineHtml } = data.markdownRemark.fields;
  const imageFluid = data.markdownRemark.frontmatter.image.childImageSharp.fluid;

  return (
    <>
      <GatsbySeo
        title="Home"
        description="Ik ben Michelle. Mijn doel is om jou als maker achter het stuur te zetten van je eigen carrière."
      />
      <Home imageFluid={imageFluid} taglineHtml={taglineHtml} />
    </>
  );
};

export const query = graphql`
  query Home {
    markdownRemark(fileAbsolutePath: {regex: "/home\\.md$/"}) {
      frontmatter {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        taglineHtml
      }
    }
  }
`;

export default IndexPage;
