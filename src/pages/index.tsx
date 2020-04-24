import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
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
    <Layout>
      <Home imageFluid={imageFluid} taglineHtml={taglineHtml} />
    </Layout>
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
