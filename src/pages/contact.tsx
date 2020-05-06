import { graphql } from 'gatsby';
import React from 'react';

import { GatsbySeo } from 'gatsby-plugin-next-seo';
import Contact from '../sections/contact';

interface Props {
  data: {
    page: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
    contactInfo: {
      frontmatter: {
        email: string;
        instagram: string;
        phone: string;
      };
    };
  };
}

const ContactPage = ({ data }: Props) => {
  const { title } = data.page.frontmatter;
  const { html } = data.page;
  const { email, instagram, phone } = data.contactInfo.frontmatter;

  return (
    <>
      <GatsbySeo title="Contact" />
      <Contact email={email} instagram={instagram} phone={phone} title={title} html={html} />
    </>
  );
};

export const query = graphql`
  query Contact {
    page: markdownRemark(fileAbsolutePath: {regex: "/contact\\.md$/"}) {
      frontmatter {
        title
      }
      html
    }
    contactInfo: markdownRemark(fileAbsolutePath: {regex: "/contact-info\\.md$/"}) {
      frontmatter {
        instagram
        email
        phone
      }
    }
  }
`;

export default ContactPage;
