import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';

interface Props {
  email: string;
  instagram: string;
  html: string;
  phone: string;
  title: string;
}

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  font-family: cormorant-garamond;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;

  ${down('tablet')} {
    width: 100%;
  }
`;

const Body = styled.div`
  font-size: 2.8rem;
  line-height: 1.2992;
  border-bottom: 1px solid;
  margin-bottom: 2rem;

  p {
    margin-bottom: 2rem;
  }
`;

const ContactInfo = styled.div`
  color: #423d3d;
  font-size: 1.6rem;
  line-height: 1.3664;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;

  ${down('tablet')} {
    flex-direction: column;
    text-align: center;

    a {
      display: block;
      margin-bottom: 0.5rem;
    }
  }
`;

const Socials = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${down('tablet')} {
    order: 1;
  }
`;

const Contact = ({ email, instagram, phone, html }: Props) => {
  return (
    <Wrapper>
      <Body dangerouslySetInnerHTML={{ __html: html }} />
      <ContactInfo>
        <a href={`mailto:${email}`}>{email}</a>
        <Socials>
          <li>
            <a title="Instagram" href={instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </Socials>
        <a href={`tel:${phone}`}>{phone}</a>
      </ContactInfo>
    </Wrapper>
  );
};

export default Contact;
